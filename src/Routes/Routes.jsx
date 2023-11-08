import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Login/Login";
import CategoryBooks from "../pages/CategoryBooks/CategoryBooks";
import BookDetails from "../pages/BookDetails/BookDetails";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../pages/Register/Register";


const myCreatedRoutes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBook',
                element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>
            },
            {
                path: '/allBooks',
                element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categoryBooks/:id',
                element: <CategoryBooks></CategoryBooks>,
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
            },
        ]
    }
]);
export default myCreatedRoutes;