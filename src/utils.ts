import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from './config/auth';

// eslint-disable-next-line import/prefer-default-export
export function formataCPF(cpf:string | undefined): any{
    return cpf ? cpf.replace(/[^\d]/g, '') : undefined;
}

class VerifyToken {
    public async validToken (req: Request, res: Response, next: any): Promise<Response> {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ error: 'Token not provider' });
        }

        const [, token] = authHeader.split(' ');

        try {
            const decoded = await promisify(jwt.verify)(token, authConfig.secret);

            console.log(decoded);

            return next();

        } catch(err) {
            return res.status(401).json({ error: 'Token invalid' });
        }
    }
}

export default new VerifyToken();
