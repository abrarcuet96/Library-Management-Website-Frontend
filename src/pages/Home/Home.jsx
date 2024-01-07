import { createContext } from "react";
import Accordian from "../../components/Accordian/Accordian";
import Banner from "../../components/Banner/Banner";
import BookCategories from "../../components/BookCategories/BookCategories";
import Footer from "../../components/Footer/Footer";
import RegistrationSection from "../../components/RegistrationSection/RegistrationSection";
// import ReactSwitch from "react-switch";
import "./Home.css"
export const ThemeContext = createContext(null);
const Home = () => {
    // const [theme, setTheme] = useState("dark");
    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // };
    return (
        // <ThemeContext.Provider value={{ theme, toggleTheme }}>
        //     <div id={theme}>
        //         <div className="switch text-center p-5 flex flex-row gap-5 justify-center items-center">
        //             <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        //             <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
        //         </div>
        //         <Banner></Banner>
        //         <BookCategories></BookCategories>
        //         <RegistrationSection></RegistrationSection>
        //         <Accordian></Accordian>
        //         <Footer></Footer>
        //     </div>
        // </ThemeContext.Provider>
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <BookCategories></BookCategories>
            <RegistrationSection></RegistrationSection>
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    );
};

export default Home;