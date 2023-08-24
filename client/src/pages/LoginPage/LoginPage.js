import Header from "../../componets/Header/Headers"
import style from "./style.module.css"
import Input from '../../componets/Input/Input'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate();

    const [inp, setInp] = useState({
        email: '',
        pwd: ''
    })

    async function getLog() {

        const res = await axios.post('http://localhost:3001/api/auth', inp)
        console.log(res);
        navigate('/students')
    }


    const arrStr = ['email', 'pwd']


    return (
        <>
            <Header isAuth={false} />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <Input data={arrStr} inp={inp} setInp={setInp}></Input>
                    <div className={style.btn} onClick={getLog}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>
        </>
    )
}
export default LoginPage