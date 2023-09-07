import Header from "../../componets/Header/Headers";
import Footer from "../../componets/Footer/Footer";
import PreviwInfo from "../../componets/PreviewInfo/PreviewInfo";
function PreviewPage() {
    return (
        <div>
            <Header isAuth={false} />
            <PreviwInfo />
            <Footer></Footer>
        </div>
    )
}

export default PreviewPage;