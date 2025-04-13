import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log("rached here");
    // console.log("Cookies Received:", req.cookies);

    const token = req.cookies.token;
    console.log("Token Found:", token ? "YES" : "NO");

    if (!token) {
      console.log("No token found in cookies");
      return res.status(401).json({
        success: false,
        message: "Authentication failed: No token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECREAT);
    console.log("Decoded data:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth middleware failed", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
