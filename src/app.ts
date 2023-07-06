import bodyParser from 'body-parser'
import express, { Request, Response, NextFunction } from 'express'
import course from './controller/course.controller'

const app = express();

app.use(bodyParser.json());
app.use('/course', course);
app.use((error, req: Request, res: Response, next: NextFunction) => res.send(error.message));

export default app;