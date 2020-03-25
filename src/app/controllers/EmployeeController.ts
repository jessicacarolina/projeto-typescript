import { Request, Response } from 'express';
import * as Yup from 'yup';

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
    deletePermissionEmployee, PasswordHash,
} from '../models/Employee';
import { formataCPF } from '../../utils';

class EmployeeController {
    public async insertEmployee(req: Request, res: Response): Promise<Response> {
        const schema = Yup.object().shape({
            fk_department: Yup.number().required(),
            name: Yup.string().required(),
            surname: Yup.string().required(),
            cpf: Yup.string().required(),
            email: Yup.string().email().required(),
            salary: Yup.number().required(),
            password: Yup.string().required().min(6),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { fk_department, name, surname, cpf, email, salary, password } = req.body;

        const formatar = formataCPF(cpf);

        const employeeExists = await verifyEmployee(formatar, fk_department);

        if (employeeExists) {
            return res.status(400).json({ error: 'Employee already exists.' });
        }

        const password_hash: string = await PasswordHash(password)

        const employee = await insertEmployee(
            fk_department,
            name,
            surname,
            formatar,
            email,
            salary,
            password_hash,
        );


        return res.json({
            message: 'User successfully registered!',
            employee
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
        const schema = Yup.object().shape({
            fk_department: Yup.number(),
            name: Yup.string(),
            surname: Yup.string(),
            cpf: Yup.string(),
            email: Yup.string().email(),
            salary: Yup.number(),
            password: Yup.string().min(6),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

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
