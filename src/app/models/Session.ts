import dbConnection from '../../config/dbConnection';

export async function verifyEmployeeExists(email: string): Promise<boolean> {
    const conn = await dbConnection.connect();
    const query = `
        SELECT email
        FROM tb_employee
        WHERE email = $1 AND fg_active = true;`;


    const result = await conn.query(query, [email]);

    conn.release();

    if (result.rowCount === 1) return true;
    return false;
}

