import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
  User = mongoose.model("User");
} catch {
  const userSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  User = mongoose.model("User", userSchema);
}

export default User;
