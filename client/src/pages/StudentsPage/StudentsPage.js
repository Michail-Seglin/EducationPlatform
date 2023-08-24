import Header from "../../componets/Header/Headers"
import style from "./style.module.css"
import Input from '../../componets/Input/Input'
import { useState } from "react"
import axios from 'axios'


function StudentsPage() {
    const arr = [{ h1: "JavaScript", p: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.' },
    { h1: 'TypeScript', p: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript\'s key features, such as type annotations, interfaces, classes, and modules' },
    { h1: "Python", p: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.' }]

    return (
        <div>
            <Header isAuth={true} />
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <div className={style.logoImg}></div>
                    <h1>Courses</h1>
                </div>

                {arr.map((el) => {
                    return (
                        <div className={style.js}>
                            <div className={style.img}></div>
                            <div className={style.lang}>
                                <h1>{el.h1}</h1>
                                <p>{el.p}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default StudentsPage