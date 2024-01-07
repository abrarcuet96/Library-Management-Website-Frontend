import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-tr from-violet-500 to-orange-300">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;