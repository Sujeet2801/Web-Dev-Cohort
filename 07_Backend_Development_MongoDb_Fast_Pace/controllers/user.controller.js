import User from "../models/User.model.js";
import dotenv from "dotenv";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = async (req, res) => {
  // get data
  // validate data
  // check if user already exists
  // create a user in database
  // create a verification token
  // save token in database
  // send token as email to user
  // send success status to user

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All field are required",
    });
  }

  try {
    const existindUser = await User.findOne({ email });
    if (existindUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;

    await user.save();

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL,
      to: user.email,
      subject: "Verify your email",
      text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
    };

    transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url(params)
  // validate token
  // find user based on token
  // if not
  // set isVerified field to true
  // remove verification token
  // save
  // return response

  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();
};

const login = async (req, res) => {
  // get data
  // validate data
  // find user
  // token
  // cookie

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email }); // email: email
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);

    if (!user.isVerified) {
      return res.status(400).json({
        message: "verify your email",
      });
    }

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECREAT,
      {
        expiresIn: "24h",
      }
    );

    console.log("=== Login Controller Debug ===");
    console.log("Token generated:", token);

    // Set cookie with minimal options for testing
    const cookieOptions = {
      httpOnly: false, // Set to false for testing
      secure: false, // Set to false for local development
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    };

    console.log("Cookie options:", cookieOptions);

    // Set cookie before sending response
    res.cookie("token", token, cookieOptions);

    // Log headers to verify cookie is set
    // console.log("Response headers:", res.getHeaders());

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });

  } catch (error) {
    res.status(400).json({
      message: "Login Failed",
      error,
      success: false,
    });
  }
};

const getMe = async (req, res) => {
  try {
    console.log("reached at profile level");
  } catch (error) {
    console.log("not reached");
    
  }
};

const logoutUser = (req, res) => {
  try {
    // Clear the token cookie
    res.cookie("token", "", {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
      expires: new Date(0), // This will make the cookie expire immediately
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Error during logout",
    });
  }
};

const forgotPassword = async (req, res) => {
  //get user by email and send reset token
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `${process.env.BASE_URL}/api/v1/users/reset-password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.MAILTRAP_SENDER_EMAIL,
      to: user.email,
      subject: "Reset your password",
      text: `Please click on the following link to reset your password: ${resetUrl}`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Reset token sent to email",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  //reset password
  const { token } = req.params;
  const { password } = req.body;
  if (!token || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
};
