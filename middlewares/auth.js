import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "sometext";
const authenticate = (req, res, next) => {
try {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Access Denied - No token provided" });
    }
    token = token.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Access Denied - Invalid token format" });
    }
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    req.user = user;
    next();
} catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Access Denied - Invalid token" });
}
};

const authorize = (role) => {
return (req, res, next) => {
    if (req.role === role) {
    next();
    } else {
    return res.json({ message: "Unauthorized access" });
    }
};
};

export { authenticate, authorize };