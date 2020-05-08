import bcrypt from 'bcrypt';

import dbConnection from '../../config/dbConnection';
interface GetEmployeeReturn {
    fk_department: number;
    id_employee: number;
    name: string;
    surname: string;
    cpf: string;
    salary: number;
}

interface InsertEmployeeReturn extends GetEmployeeReturn{
    email: string;
}

interface GetPermissionEmployeeReturn {
    fk_permission: number;
    nm_permission: string;
}

export async function insertEmployee(
    fk_department: number,
    name: string,
    surname: string,
    cpf: string,
    email: string,
    salary: number,
    password: string,
): Promise<InsertEmployeeReturn> {
    const conn = await dbConnection.connect();

    const query = `
        INSERT INTO tb_employee (fk_department, name, surname, cpf, email, salary, password, fg_active)
        VALUES($1, $2, $3, $4, $5, $6, $7, true);`;

    const result = await conn.query(query, [
        fk_department,
        name,
        surname,
        cpf,
        email,
        salary,
        password,
    ]);

    conn.release();

    return result.rows[0];
}

export async function PasswordHash(password:string): Promise<any> {
    const password_hash: any = await bcrypt.hash(password, 8);
    return password_hash;
}

export async function verifyPasswordMatch(password:any): Promise<boolean> {
    const match =  bcrypt.compare(password, await PasswordHash(password));
    if(match) {
        return true;
    }
    else return false;
}

export async function verifyEmployee(cpf: string, fk_department: number): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_employee
        WHERE cpf = $1 AND fk_department = $2;`;

    const result = await conn.query(query, [cpf, fk_department]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

export async function getAllEmployee() {
    const conn = await dbConnection.connect();

    const query = `
        SELECT fk_department, id_employee, name, surname, cpf, salary
        FROM tb_employee
        WHERE fg_active = true`;

    const result = await conn.query(query);

    conn.release();

    return result.rows;
}

export async function getEmployee(id: number): Promise<GetEmployeeReturn> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT fk_department, id_employee, name, surname, cpf, salary
        FROM tb_employee
        WHERE fg_active = true AND id_employee = $1`;

    const result = await conn.query(query, [id]);

    conn.release();

    return result.rows[0];
}

export async function deleteEmployee(id: number) {
    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_employee
    SET fg_active = false
    WHERE id_employee = $1`;

    const result = await conn.query(query, [id]);

    conn.release();

    return result.rows[0];
}

export async function insertPermissionEmployee(fk_employee: number, fk_permission: number): Promise<GetPermissionEmployeeReturn> {
    const conn = await dbConnection.connect();
    const query = `
        INSERT INTO tb_employee_permission (fk_employee,
            fk_permission,
            dt_creation)
        VALUES($1, $2, NOW());`;

    const result = await conn.query(query, [fk_employee, fk_permission]);

    conn.release();

    return result.rows[0];
}

export async function verifyPermission(id: number): Promise<boolean> {
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

export async function getPermissionEmployee(id: number): Promise<GetPermissionEmployeeReturn> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT fk_permission, nm_permission, ds_permission
        FROM tb_employee_permission ep
        INNER JOIN tb_permission p
            ON ep.fk_permission = p.id_permission
        WHERE fg_active = true AND fk_employee = $1;`;

    const result: any = await conn.query(query, [id]);

    conn.release();

    return result.rows;
}

export async function deletePermissionEmployee(fk_employee: number,
    fk_permission: number) {
    const conn = await dbConnection.connect();

    const query = `
    DELETE
    FROM tb_employee_permission
    WHERE fk_employee = $1 AND fk_permission = $2`;

    const result = await conn.query(query, [fk_employee, fk_permission]);

    conn.release();

    return result.rows[0];
}

export async function verifyUpdateEmployee(id: number): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT *
        FROM tb_employee
        WHERE id_employee = $1;`;

    const result = await conn.query(query, [id]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

export async function updateEmployee(
    name: string,
    surname: string,
    cpf: string | undefined,
    email: string,
    salary: number,
    password: string,
    id: number) {
    const conn = await dbConnection.connect();

    const query = `
    UPDATE tb_employee
    SET name = $1, surname = $2, cpf = $3, email = $4, salary = $5, password = $6
    WHERE fg_active = true AND id_employee = $7`;

    const result = await conn.query(query, [name, surname, cpf, email, salary, password, id]);

    conn.release();

    return result.rows[0];
}

export async function employee(email: string): Promise<any> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT id_employee, name
        FROM tb_employee
        WHERE fg_active = true AND email = $1`;

    const result = await conn.query(query, [email]);

    conn.release();

    return result.rows[0];
}

