import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connect(); // connect to mongodb

        try {
          //check email
          const user = await User.findOne({ email: credentials.email });

          /* console.log("Stored hashed password: ", user.password);
          console.log("Provided password: ", credentials.password); */

          //check password
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else throw new Error("Wrong credentials");
          } else throw new Error("User not found");
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    //in case error login, the application will stay at login page and wont redirect to other default page
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
