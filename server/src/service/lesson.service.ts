import { getAllLessonDB, createLessonDB, updateLessonDB, deleteLessonDB, getLessonByIDDB } from "../repository/lesson.repository";

async function getAllLesson() {
    const data = await getAllLessonDB();
    return data;
}

async function createLesson(course_id, title) {
    const data = await createLessonDB(course_id, title);
    return data;
}

async function updateLesson(course_id, title, id) {
    const data = await updateLessonDB(course_id, title, id);
    return data;
}

async function deleteLesson(id) {
    const data = await deleteLessonDB(id);
    return data;
}

async function getLessonByID(id) {
    const data = await getLessonByIDDB(id);
    return data;
}

export { getAllLesson, createLesson, updateLesson, deleteLesson, getLessonByID }