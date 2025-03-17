import User from "../models/User.model.js";
import dotenv from 'dotenv'
import crypto from 'crypto'
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
dotenv.config()
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
        })
    }

    try {
        const existindUser = await User.findOne({ email })
        if (existindUser) {
            return res.status(400).json({
                message: "User already exists",
            })
        };

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

        const token = crypto.randomBytes(32).toString('hex');
        user.verificationToken = token;

        await user.save();
        
        // send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD ,
            }
        
        });
        
        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        };

        transporter.sendMail(mailOption)
        
        res.status(201).json({
            message: "User registered successfully",
            success: true,
        })

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
        const user = await User.findOne({ email }) // email: email
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch);

        if(!user.isVerified){
            return res.status(400).json({
                message: "verify your email"
            })
        }

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            "shhhhh",
            {
                expiresIn: "24h",
            }
        );
        
        
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        };
        res.cookie("token", token, cookieOptions);
        console.log("reached here");
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
        console.log("Set-Cookie Header:", res.getHeaders()["set-cookie"]);


    } catch (error) {
        res.status(400).json({
            message: "Login Failed",
            error,
            success: false,
        });
    }

};

const logoutUser = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}
const forgetPassword = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}
const getMe = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

export { registerUser, verifyUser, login };