import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to the database
connect();

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { email, password } = await request.json();

    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },  // Adjusted error message
        { status: 401 }  // Use 401 status for unauthorized
      );
    }

    // Generate a JWT token for authentication
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "12h",
    });

    // Prepare the response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // Set the token as an HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
