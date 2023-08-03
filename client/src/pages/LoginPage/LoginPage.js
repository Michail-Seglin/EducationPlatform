import Header from "../../componets/Header/Headers"
import style from "./style.module.css"
function LoginPage() {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Login</h1>
                    <div><input placeholder='Login'></input></div>
                    <div><input placeholder='Password'></input></div>
                    <div className={style.btn}>Login</div>
                </div>
                <div className={style.img}></div>
            </div>
        </>
    )
}
export default LoginPage