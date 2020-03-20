import dbConnection from '../../config/dbConnection';

interface GetDepartmentReturn {
    id_department: number;
    nm_department: string;
    ds_department: string;
}

interface GetIdDepartment {
    id_department: number;
}

interface GetAllEmployeesByIdDepartment {
    id: number;
    name:string;
    cpf: string | undefined;
    email: string;
    salary: number;
}

export async function verifyDepartment(name: String): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_department
        WHERE nm_department = $1;`;

    const result = await conn.query(query, [name]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

export async function insertDepartment(name: String, description: String): Promise<GetIdDepartment> {
    const conn = await dbConnection.connect();
    const query = `
        INSERT INTO tb_department(nm_department, ds_department, fg_active)
        VALUES($1, $2, true)
        RETURNING id_department;`;

    const result = await conn.query<GetIdDepartment>(query, [name, description]);

    conn.release();

    return result.rows[0];
}

export async function getAllDepartment() {
    const conn = await dbConnection.connect();

    const query = `
        SELECT id_department, nm_department, ds_department
        FROM tb_department
        WHERE fg_active = true`;

    const result = await conn.query(query);

    conn.release();

    return result.rows;
}


export async function getDepartment(id: number): Promise<GetDepartmentReturn> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT id_department, nm_department, ds_department
        FROM tb_department
        WHERE fg_active = true AND id_department = $1`;

    const result = await conn.query<GetDepartmentReturn>(query, [id]);

    conn.release();

    return result.rows[0];
}

export async function deleteDepartment(id: number) {
    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_department
    SET fg_active = false
    WHERE id_department = $1`;

    const result = await conn.query(query, [id]);

    conn.release();

    return result.rows[0];
}

export async function verifyUpdateDepartment(id: number): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_department
        WHERE id_department = $1;`;

    const result = await conn.query(query, [id]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

export async function updateDepartment(nm_department: string | undefined,
    ds_department: string | undefined,
    id: number): Promise<GetDepartmentReturn> {

    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_department
    SET nm_department = $1, ds_department = $2
    WHERE fg_active = true AND id_department = $3`;

    const result = await conn.query(query, [nm_department, ds_department, id]);

    conn.release();

    return result.rows[0];
}

export async function getAllEmployees(id: number): Promise<GetAllEmployeesByIdDepartment> {
    const conn = await dbConnection.connect();

    const query = `
    SELECT name, email, salary, id_employee
    FROM tb_employee
    WHERE fk_department = $1;`;

    const result: any = await conn.query(query, [id]);

    conn.release();

    return result.rows;
}
