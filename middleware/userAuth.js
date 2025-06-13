import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorised. Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
           req.user = {id: tokenDecode.id, email: tokenDecode.email};
           next();
        }
    } catch (error) {
       return res.json({ success: false, message:'Invalid or expired token'});
    }
};