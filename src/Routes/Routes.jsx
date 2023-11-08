import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Login/Login";
import CategoryBooks from "../pages/CategoryBooks/CategoryBooks";
import BookDetails from "../pages/BookDetails/BookDetails";


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
                element: <AddBook></AddBook>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>
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
                path: '/categoryBooks/:id',
                element: <CategoryBooks></CategoryBooks>,
            },
            {
                path: '/bookDetails/:id',
                element: <BookDetails></BookDetails>,
            },
        ]
    }
]);
export default myCreatedRoutes;