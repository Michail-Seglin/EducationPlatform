import React, { useEffect, useState } from "react"
import Header from "../../componets/Header/Headers"
import style from './style.module.css'
import { useParams } from 'react-router-dom'
// import storage from '../../storage/course.json'
import axios from "axios"


function CoursePage() {
    const { id } = useParams();
    const [res, setRes] = useState({});


    async function getAllCourses() {
        const res = await axios.get(`http://localhost:3001/course/${id}`)
        setRes(res.data[0])
    }

    useEffect(() => {
        getAllCourses()
    }, [])


    return (
        <>
            <Header isAuth={true}></Header>
            <div className={style.wrapper}>
                <div className={style.wrapperCourse}>
                    <div className={style.imgCourse}></div>
                    <div className={style.course}>
                        <h2>{res.course}</h2>
                        <p>{res.description}</p>
                    </div>
                    <div className={style.btn}>Go to course</div>
                </div>

                <div className={style.wrapperRight}>
                    <h1>Lessons</h1>
                    <p>1. test</p>
                    <p>1. test</p>
                    <p>1. test</p>
                    <p>1. test</p>
                    <p>1. test</p>
                </div>
            </div>
        </>
    )
}

export default CoursePage