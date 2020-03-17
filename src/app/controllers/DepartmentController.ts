import { Request, Response } from 'express';

import {
    getDepartment,
    insertDepartment,
    getAllDepartment,
    verifyDepartment,
    verifyUpdateDepartment,
    updateDepartment,
    deleteDepartment,
    getAllEmployees,
} from '../models/Department';

class DepartmentController {
    public async insertDepartment(req: Request, res: Response): Promise<Response> {
        const { nm_department, ds_department } = req.body;

        const departExists: boolean = await verifyDepartment(nm_department);

        if (departExists) {
            return res
                .status(400)
                .json({ error: 'Department already exists.' });
        }

        const department = await insertDepartment(nm_department, ds_department);

        return res.json({
            data: {
                message: 'The department has been successfully registered!',
                department,
            },
        });
    }

    public async getDepartment(req: Request, res: Response): Promise<Response> {

        const id = parseInt(req.params.id);

        const dep = await getDepartment(id);

        if (dep) {
            return res.json({
                id: dep.id_department,
                name: dep.nm_department,
                description: dep.ds_department,
            });
        }

        return res.json({ error: 'Department does not found' });
    }

    public async getAllDepartment(req: Request, res: Response): Promise<Response> {
        const all = await getAllDepartment();

        return res.json({ data: all });
    }

    public async deleteDepartment(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const del = await deleteDepartment(id);

        return res.json({ message: 'Department deleted', del });
    }

    public async updateDepartment(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const getUpdate = await verifyUpdateDepartment(id);

        if (!getUpdate) {
            return res
                .status(400)
                .json({ error: 'Department does not exists.' });
        }

        const nm_department = String(req.body.nm_department);
        const ds_department = String(req.body.ds_department);

        const update = await updateDepartment(nm_department, ds_department, id);

        return res.json({
            message: 'Department updated successfully',
            update,
        });
    }

    public async getAllEmployees(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const verify = await verifyUpdateDepartment(id);

        if (!verify) {
            return res.status(400).json({ error: 'Department does not found' });
        }

        const allEmployees = await getAllEmployees(id);

        return res.json(allEmployees);
    }
}
export default new DepartmentController();
