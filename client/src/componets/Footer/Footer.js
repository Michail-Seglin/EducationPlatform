import style from './style.module.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <div className={style.btns}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.dev}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <div className={style.pict}>
                <div className={style.img}>
                    <div className={style.cat}></div>
                    <div className={style.gt}></div>
                    <div className={style.you}></div>
                </div>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div>
    )
}

export default Footer