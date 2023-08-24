import Header from "../../componets/Header/Headers";
import PreviwInfo from "../../componets/PreviewInfo/PreviewInfo";
function PreviewPage() {
    return (
        <div>
            <Header isAuth={false} />
            <PreviwInfo />
        </div>
    )
}

export default PreviewPage;