import { createUserDB } from '../repository/api.repository'
import { iUser } from '../interfaces/index'

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    return data
}

export { createUser }