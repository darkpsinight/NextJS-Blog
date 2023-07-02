import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 8);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
