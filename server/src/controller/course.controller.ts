import express, { Request, Response } from 'express';
import { getUsers, createCourse, getCourseById } from '../service/course.service'
import { iCourse } from '../interfaces';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data: iCourse[] = await getUsers();
        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { course,description } = req.body;
        const data: iCourse[] = await createCourse(course,description)
        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iCourse[] = await getCourseById(id);
        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default route;