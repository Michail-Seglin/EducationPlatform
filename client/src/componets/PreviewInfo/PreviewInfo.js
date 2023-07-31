import style from './style.module.css'

function PreviwInfo() {
    return (
        <>
            <div className={style.preview}>
                <div className={style.previewInfo}>
                    <p className={style.discription}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.info}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btnInfo}>About platform</div>
                    <div className={style.statistic}>
                        <div className={style.vektorWrapper}>
                            <div className={style.vektor}></div>
                            <p>
                                600 <span>+</span>
                            </p>
                        </div>
                        <p className={style.previewText}>Students</p>
                    </div>
                </div>

                <div className={style.previewGuy}></div>
            </div>
            <div className={style.wrapper}>
                <div className={style.learn}>
                    <div className={style.imgGirl}></div>
                    <div className={style.info}>
                        <h1>Learn a language in a playful way</h1>
                        <p>Make learning programming languages more fun with mini-games</p>
                        <div className={style.format}>
                            <div className={style.sprint}></div>
                            <div className={style.task}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.knowledge}>
                <div className={style.info}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className = {style.btnText}>Textbook →</div>
                </div>
                <div className={style.imgGirl2}></div>
            </div>
            <div></div>
        </>
    )
}

export default PreviwInfo