import bcrypt from 'bcrypt';
import { createUserDB, getEmailDB } from '../repository/api.repository'
import { iUser } from '../interfaces/index'


const salt = 10;
async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const foundEmail = await getEmailDB(email);
    if (foundEmail.length) throw new Error("this email ");
    const hashPwd = await bcrypt.hash(pwd, salt);
    const data = await createUserDB(name, surname, email, hashPwd);
    if (!data.length) throw new Error('created')
    return data
}


async function authUser(email: string, pwd: string): Promise<iUser[]> {
    const foundEmail = await getEmailDB(email);
    if (!foundEmail.length) throw new Error("this email does'n exist ");
    const bool = await bcrypt.compare(pwd, foundEmail[0].pwd);
    if (!bool) throw new Error("do not math");
    return foundEmail
}
export { createUser, authUser }