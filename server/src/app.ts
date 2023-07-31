import bodyParser from 'body-parser'
import express, { Request, Response, NextFunction } from 'express'
import course from './controller/course.controller'
import router from './controller/user.controller'
import routerAPI from './controller/api.controller'
const app = express();

app.use(bodyParser.json());
app.use('/course', course);
app.use('/user', router);
app.use('/api', routerAPI)
app.use((error, req: Request, res: Response, next: NextFunction) => res.send(error.message));

export default app;