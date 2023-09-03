import Header from "../../componets/Header/Headers"
import style from "./style.module.css"
import Input from '../../componets/Input/Input'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Pagination } from '@mui/material'
import { Link } from "react-router-dom"
import arr from '../../storage/course.json'

function StudentsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [storage, setStorage] = useState([]);


    async function getAllCourses() {
        const res = await axios.get("http://localhost:3001/course/");
        setStorage(res.data);
    }

    useEffect(() => {
        getAllCourses()
    }, [])

    const size = 2;
    const lastInd = currentPage * size;
    const firstInd = lastInd - size;
    const item = storage.slice(firstInd, lastInd)
    const handleChange = (event, value) => {
        setCurrentPage(value)
    }
    return (
        <div>
            <Header isAuth={true} />
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <div className={style.logoImg}></div>
                    <h1>Courses</h1>
                </div>

                {item.map((el) => {
                    return (

                        <Link to={`/course/${el.id}`}>
                            <div className={style.js}>
                                <div className={style.img}></div>
                                <div className={style.lang}>
                                    <h1>{el.course}</h1>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Pagination className={style.pagination}
                count={Math.ceil(arr.length / size)}
                variant="outlined"
                onChange={handleChange} />
        </div>
    )
}

export default StudentsPage