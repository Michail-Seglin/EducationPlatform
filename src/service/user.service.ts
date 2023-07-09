import { iUser } from "../interfaces";
import { getAllUsersDB,  getUserByIdDB, updateUserDB, deleteUserDB } from "../repository/user.repository";

async function getAllUsers(): Promise<iUser[]> {
    const data = await getAllUsersDB();
    if (data.length === 0) throw new Error('no data')
    return data
}


async function getUserById(id: number): Promise<iUser[]> {
    const data = await getUserByIdDB(id);
    if (data.length === 0) throw new Error('no data')
    return data
}

async function updateUser(name: string, surname: string, email: string, pwd: string, id: number): Promise<iUser[]> {
    const data = await updateUserDB(name, surname, email, pwd, id);
    if (data.length === 0) throw new Error('no data')
    return data
}

async function deleteUser(id): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    if (data.length === 0) throw new Error('user not found');
    return data
}

export { getAllUsers, getUserById, updateUser, deleteUser }