import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const myCreatedRoutes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);
export default myCreatedRoutes;