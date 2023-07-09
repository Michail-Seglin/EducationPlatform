import { pool } from '../db'
import { iUser } from '../interfaces/index'
async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query("begin");
        const sql = 'insert into users(name, surname, email, pwd) values ($1, $2, $3, $4) returning*';
        const data = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query("commit");
        return data
    } catch (error: any) {
        await client.query("rollback");
        console.log(`createUserDB: ${error.message}`);
        return [];
    }
}

export { createUserDB }