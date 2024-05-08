import Slider from "../modules/Slider/slider";
import Header from "../modules/Header/header";
import TopGameList from "../modules/topGamesList/topGamesList";
import SelectCategory from "../modules/selectCategory/selectCategory";
import Footer from "../modules/Footer/footer";

function MainPage() {
    return (
    <>
        <Header/>
        <Slider/>
        <TopGameList/>
        <SelectCategory/>
        <Footer/>
    </>
    );
}

export default MainPage;