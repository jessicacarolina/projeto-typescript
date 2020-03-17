import { Request, Response } from 'express';

import {
    insertPermission,
    verifyPermission,
    getAllPermission,
    getPermission,
    updatePermission,
    verifyUpdatePermission,
    deletePermission,
} from '../models/Permission';

class PermissionController {
    public async insertPermission(req: Request, res: Response): Promise<Response> {
        const { nm_permission, cod_permission, ds_permission } = req.body;

        const permissionExists = await verifyPermission(
            nm_permission,
            cod_permission
        );

        if (permissionExists) {
            return res
                .status(400)
                .json({ error: 'Permission already exists.' });
        }

        const permission = await insertPermission(
            nm_permission,
            cod_permission,
            ds_permission
        );

        return res.json({
            data: {
                mensagem: 'Permission successfully registered!',
                permission,
            },
        });
    }

    public async getAllPermission(req: Request, res: Response): Promise<Response> {
        const all = await getAllPermission();

        return res.json({ data: all });
    }

    public async getPermission(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const per = await getPermission(id);

        if (per) {
            return res.json({
                data: per,
            });
        }

        return res.json({ error: 'Permission does not found' });
    }

    public async updatePermission(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const getUpdate = await verifyUpdatePermission(id);

        if (!getUpdate) {
            return res
                .status(400)
                .json({ error: 'Permission does not exists.' });
        }

        const { nm_permission, cod_permission, ds_permission } = req.body;

        const update = await updatePermission(
            nm_permission,
            cod_permission,
            ds_permission,
            id
        );

        return res.json({
            data: {
                message: 'Permission updated successfully',
                update,
            },
        });
    }

    public async deletePermission(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);

        const del = await deletePermission(id);

        return res.json({
            data: {
                mensagem: 'Permission successfully deleted!',
            },

            del,
        });
    }
}
export default new PermissionController();
