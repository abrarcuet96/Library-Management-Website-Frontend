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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateBookDetails from "../pages/UpdateBookDetails/UpdateBookDetails";


const myCreatedRoutes= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/updateBookDetails/:id',
                element: <PrivateRoutes><UpdateBookDetails></UpdateBookDetails></PrivateRoutes>,
                loader: ({params})=> fetch(`https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/addedBook/${params.id}`)
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
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
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);
export default myCreatedRoutes;