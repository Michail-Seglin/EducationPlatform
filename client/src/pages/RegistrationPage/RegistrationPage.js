import Header from "../../componets/Header/Headers";
import style from './style.module.css'
import Input from '../../componets/Input/Input'
import axios from 'axios'
import { useState } from "react";
function RegistrationPage() {
    const arrStr = ['name', 'surname', 'email', 'pwd']

    const [inp, setInp] = useState({
        name: '',
        surname: '',
        pwd: '',
        email: ''
    });

    async function reg() {
        const res = await axios.post('http://localhost:3001/api/register', inp);
        console.log(res);
    }

    return (
        <>
            <Header isAuth={false}/>
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <Input data={arrStr} setInp={setInp} inp={inp}></Input>
                    <div className={style.btn} onClick={reg}>Sign Up
                    </div>
                </div>
                <div className={style.img}></div>
            </div>
        </>
    )
}

export default RegistrationPage