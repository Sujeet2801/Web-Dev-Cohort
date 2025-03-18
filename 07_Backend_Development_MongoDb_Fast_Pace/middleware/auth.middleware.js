import jwt from "jsonwebtoken";
export const isLoggedIn = async (req, res, next) => {
  try {
    console.log(req.cookies);
    let token = req.cookies;

    console.log("Token Found: ", token ? "YES" : "NO");

    if (!token) {
      console.log("No token");
      return res.status(401)({
        success: false,
        message: "Authetication failed",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECREAT);
    console.log("decoded data", decoded);
    req.user = decoded;
    console.log("reached");

    next();
  } catch (error) {
    console.log("Auth middleware failed");
    return res.status(401).json({
      success: false,
      message: "failed",
    });
  }
  next();
};
