import { getUsersDB, createCourseDB, getCourseByIdDB } from '../repository/course.repository'
import { iCourse } from '../interfaces';
async function getUsers(): Promise<iCourse[]> {
    const data = await getUsersDB();
    if (!data.length) throw new Error('no data')
    return data
}

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data = await createCourseDB(course, description);
    return data
}

async function getCourseById(id: number): Promise<iCourse[]> {
    const data = await getCourseByIdDB(id);
    return data
}

export { getUsers, createCourse, getCourseById }