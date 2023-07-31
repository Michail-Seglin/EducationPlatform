import { iUser } from '../interfaces';
import { pool } from '../db';

async function getAllUsersDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'select *from users';
    const data = (await client.query(sql)).rows;
    return data
}

// async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
//     const client = await pool.connect();
//     try {
//         await client.query("begin");
//         const sql = 'insert into users(name, surname, email, pwd) values ($1, $2, $3, $4) returning*';
//         const data = (await client.query(sql, [name, surname, email, pwd])).rows;
//         await client.query("commit");
//         return data
//     } catch (error: any) {
//         await client.query("rollback");
//         console.log(`createUserDB: ${error.message}`);
//         return [];
//     }
// }

async function getUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'select *from users where id =$1';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function updateUserDB(name: string, surname: string, email: string, pwd: string, id: number): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('begin');
        const sql = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id= $5 returning *';
        const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
        await client.query('commit');
        return data
    } catch (error: any) {
        await client.query("rollback");
        console.log(`updateUser:${error.message}`);
        return []
    }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('begin');
        const sql = 'delete from users where id = $1 returning *';
        const data = (await client.query(sql, [id])).rows;
        await client.query('commit');
        return data
    } catch (error: any) {
        await client.query("rollback");
        console.log(`deleteUserDB:${error.message}`);
        return []
    }
}

export { getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB }