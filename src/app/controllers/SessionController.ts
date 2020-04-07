import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { verifyEmployeeExists } from '../models/Session';
import { verifyPasswordMatch, employee } from '../models/Employee';
import authConfig from '../../config/auth';
class SessionController {

    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const employeeExists = await verifyEmployeeExists(email);

        if (!employeeExists) {
            return res.status(401).json({
                message: 'User does not exists'
            });
        }

        const passwordMatch = await verifyPasswordMatch(password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: 'Password does not match'
            });
        }
        // passando por todas as verificações emitir o token de autenticação
        const { id_employee, name }  = await employee(email);
        return res.json({
            user: {
                id_employee,
                name,
                email,
            },
            token: jwt.sign({ id_employee }, authConfig.secret, {
                expiresIn: authConfig.expireIn,
            }),
        });
    }
}

export default new SessionController();
