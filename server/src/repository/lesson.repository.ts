import { pool } from '../db';

async function getAllLessonDB() {
    const client = await pool.connect();

    const sql = 'select * from lessons';
    const data = (await client.query(sql)).rows;

    return data
}


async function createLessonDB(course_id, title) {
    const client = await pool.connect();
    const sql = 'INSERT INTO LESSONS (course_id, title) values ($1,$2) returning *'

    const data = (await client.query(sql, [course_id, title])).rows;
    return data
}

async function updateLessonDB(course_id, title, id) {
    const client = await pool.connect();
    const sql = 'update lessons set course_id=$1, title=$2 where id=$3 returning *';

    const data = (await client.query(sql, [course_id, title, id])).rows;
    return data

}

async function deleteLessonDB(id) {
    const client = await pool.connect();
    const sql = 'delete from lessons where id=$1 returning *';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function getLessonByIDDB(id){
    const client = await pool.connect();
    const sql = 'select * from lessons where id=$1';
    const data = (await client.query(sql, [id])).rows;
    return data
}

export { getAllLessonDB, createLessonDB, updateLessonDB, deleteLessonDB, getLessonByIDDB }