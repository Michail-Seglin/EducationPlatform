import express from 'express';
import { getAllLesson, createLesson, updateLesson, deleteLesson, getLessonByID } from '../service/lesson.service';

const routeLesson = express.Router();

routeLesson.get('/', async (req, res) => {
    try {
        const data = await getAllLesson();
        res.send(data);
    } catch (er: any) {
        res.send(er.message)
    }
})

routeLesson.post('/', async (req, res) => {
    try {
        const { course_id, title } = req.body;
        const data = await createLesson(course_id, title);
        res.send(data)
    } catch (er: any) {
        res.send(er.message)
    }
})

routeLesson.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { course_id, title } = req.body;
        const data = await updateLesson(course_id, title, id);
        res.send(data);
    } catch (er: any) {
        res.send(er.message)
    }
})

routeLesson.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteLesson(id);
        res.send(data)
    } catch (er: any) {
        res.send(er.message)
    }
})

routeLesson.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getLessonByID(id);
        res.send(data)
    } catch (er: any) {
        res.send(er.message)
    }
})

export default routeLesson