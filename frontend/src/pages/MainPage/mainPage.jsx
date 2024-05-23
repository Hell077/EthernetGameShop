import Slick from "../../modules/ReactSlickTest/SlickTest";
import Header from "../../modules/Header/header";
import TopGameList from "../../modules/topGamesList/topGamesList";
import SelectCategory from "../../modules/selectCategory/selectCategory";
import Footer from "../../modules/Footer/footer";

function MainPage() {
    return (
        <>
            <Header />
            <Slick />
            <TopGameList />
            <SelectCategory />
            <Footer />
        </>
    );
}

export default MainPage;