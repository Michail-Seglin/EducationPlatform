interface iCourse {
    id: number;
    course: string
}

interface iUser {
    id: number,
    name: string,
    surname: string,
    email: string,
    pwd: string
}

export { iCourse, iUser }