import { TokenDecode } from "../utility/tokenutility.js"

export default (req, res, next) => {
    let token = req.headers['token'];
    if (!token) {
        token = req.cookies['token'];
    }

    if (!token) {
        return res.status(401).json({ status: "fail", message: "Unauthorized token" });
    }

    let decoded = TokenDecode(token);
    if (!decoded) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    let email = decoded['email'];
    let user_id = decoded['user_id'];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
};
