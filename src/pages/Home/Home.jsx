import Accordian from "../../components/Accordian/Accordian";
import Banner from "../../components/Banner/Banner";
import BookCategories from "../../components/BookCategories/BookCategories";
import Footer from "../../components/Footer/Footer";
import RegistrationSection from "../../components/RegistrationSection/RegistrationSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <RegistrationSection></RegistrationSection>
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    );
};

export default Home;