import dbConnection from '../../config/dbConnection';

interface InsertPermissionReturn {
    nm_permission: string;
    cod_permission: string;
    ds_permission: string;
}

interface GetPermissionByIdReturn {
    nm_permission: string;
    cod_permission: string;
}

export async function insertPermission(
    nm_permission: string,
    cod_permission: string,
    ds_permission: string
): Promise<InsertPermissionReturn> {
    const conn = await dbConnection.connect();
    const query = `
        INSERT INTO tb_permission (nm_permission,cod_permission, ds_permission, fg_active)
        VALUES($1, $2, $3, true);`;

    const result = await conn.query(query, [
        nm_permission,
        cod_permission,
        ds_permission,
    ]);

    conn.release();

    return result.rows[0];
}

export async function verifyPermission(nm_permission: string, cod_permission: string): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_permission
        WHERE nm_permission = $1 AND cod_permission = $2;`;

    const result = await conn.query(query, [nm_permission, cod_permission]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

export async function getAllPermission() {
    const conn = await dbConnection.connect();

    const query = `
        SELECT id_permission, nm_permission, cod_permission
        FROM tb_permission
        WHERE fg_active = true`;

    const result = await conn.query(query);

    conn.release();

    return result.rows;
}

export async function getPermission(id: number): Promise<GetPermissionByIdReturn> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT nm_permission, cod_permission
        FROM tb_permission
        WHERE fg_active = true AND id_permission = $1`;

    const result = await conn.query(query, [id]);

    conn.release();

    return result.rows[0];
}

export async function updatePermission(
    nm_permission: string,
    cod_permission: string,
    ds_permission: string,
    id: number
) {
    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_permission
    SET nm_permission = $1, cod_permission = $2, ds_permission = $3
    WHERE fg_active = true AND id_permission = $4`;

    const result = await conn.query(query, [nm_permission, cod_permission, ds_permission, id]);

    conn.release();

    return result.rows[0];
}

export async function verifyUpdatePermission(id: number): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_permission
        WHERE id_permission = $1;`;

    const result = await conn.query(query, [id]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}
export async function deletePermission(id: number) {
    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_permission
    SET fg_active = false
    WHERE id_permission = $1`;

    const result = await conn.query(query, [id]);

    conn.release();

    return result.rows[0];
}
