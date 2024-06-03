import Slick from "../../modules/ReactSlickTest/SlickTest";
import Header from "../../modules/Header/header";
import TopGameList from "../../modules/topGamesList/topGamesList";
import Footer from "../../modules/Footer/footer";

function MainPage() {
    return (
        <>
            <Header />
            <Slick />
            <TopGameList />
            <Footer />
        </>
    );
}

export default MainPage;