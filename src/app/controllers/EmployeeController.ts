import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import {
    insertEmployee,
    verifyEmployee,
    getAllEmployee,
    getEmployee,
    deleteEmployee,
    insertPermissionEmployee,
    verifyPermission,
    getPermissionEmployee,
    updateEmployee,
    verifyUpdateEmployee,
    deletePermissionEmployee,
} from '../models/Employee';
import { formataCPF } from '../../utils';

class EmployeeController {
    public async insertEmployee(req: Request, res: Response): Promise<Response> {
        const { fk_department, name, surname, cpf, email, salary, password } = req.body;

        const formatar = formataCPF(cpf);

        // if (!conn) { return res.status(500).send({ error: 'error'}) }

        // const password_hash: string = await bcrypt.hash(req.body.password, 8)

        const employeeExists = await verifyEmployee(formatar, fk_department);

        if (employeeExists) {
            return res.status(400).json({ error: 'Employee already exists.' });
        }

        const employee = await insertEmployee(
            fk_department,
            name,
            surname,
            formatar,
            email,
            salary,
            password,
        );

        return res.json({
            message: 'User successfully registered!',
            employee,
        });
    }

    public async getAllEmployee(req: Request, res: Response): Promise<Response> {
        const all = await getAllEmployee();

        return res.json({ data: all });
    }

    public async getEmployee(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const emp = await getEmployee(id);

        if (emp) {
            return res.json({
                departamento: emp.fk_department,
                id: emp.id_employee,
                name: emp.name,
                sobrenome: emp.surname,
                cpf: emp.cpf,
                salário: emp.salary,
            });
        }

        return res.json({ error: 'Employee does not found' });
    }

    public async deleteEmployee(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const del = await deleteEmployee(id);

        return res.json({ data: { message: 'Employee deleted', del } });
    }

    public async insertPermissionEmployee(req: Request, res: Response): Promise<Response> {
        const fk_employee = parseInt(req.params.fk_employee);
        const fk_permission = parseInt(req.params.fk_permission);

        const hasPermission: boolean = await verifyPermission(fk_permission);

        if (!hasPermission) {
            return res
                .status(400)
                .json({ error: 'Permission does not exists.' });
        }

        const permission = await insertPermissionEmployee(
            fk_employee,
            fk_permission
        );

        return res.json({
            data: {
                mensagem: 'Permission granted successfully!',
                permission,
            },
        });
    }

    public async getPermissionEmployee(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const getPer = await getPermissionEmployee(id);

        if (getPer) {
            return res.json({ data: getPer });
        }

        return res.json({ error: 'Employee does not have permissions' });
    }

    public async deletePermissionEmployee(req: Request, res: Response): Promise<Response> {
        const fk_employee = parseInt(req.params.fk_employee);
        const fk_permission = parseInt(req.params.fk_permission);

        const delPermission = await deletePermissionEmployee(
            fk_employee,
            fk_permission
        );

        return res.json({
            data: { message: 'Permission deleted', delPermission },
        });
    }

    public async updateEmployee(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const upEmployee = await verifyUpdateEmployee(id);

        if (!upEmployee) {
            return res.status(400).json({ error: 'Employee does not exists.' });
        }

        const { name, surname, cpf, email, salary, password } = req.body;

        const formatar = formataCPF(cpf);

        const updateEmp = await updateEmployee(
            name,
            surname,
            formatar,
            email,
            salary,
            password,
            id
        );

        return res.json({
            data: {
                message: 'User updated successfully',
                updateEmp,
            },
        });
    }
}
export default new EmployeeController();
