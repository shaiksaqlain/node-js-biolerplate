import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

interface JwtPayload {
    id: string;
}

export const generateToken = (id: string): string => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '30d', // Token expiry time
    });
};

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
