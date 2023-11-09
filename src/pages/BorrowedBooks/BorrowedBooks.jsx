import { useContext, useEffect, useState } from "react";
import BorrowedBook from "./BorrowedBook";
import { AuthContext } from "../../providers/AuthProviders";

const BorrowedBooks = () => {
    const {user}= useContext(AuthContext);
    const {email}= user;
    const url=`https://abrar-library-server-86yxqqchg-abrars-projects-bbcef6d7.vercel.app/borrowedPageBooks?email=${email}`
    const [books, setBooks] = useState([]);
    const [userInfo, setUserInfo]= useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBooks(data))
    },[url])
    useEffect(()=>{
        fetch('https://abrar-library-server-86yxqqchg-abrars-projects-bbcef6d7.vercel.app/userInfo')
        .then(res=>res.json())
        .then(data=> setUserInfo(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-2 p-2">
            {
                books.map(book=> <BorrowedBook books={books} setBooks={setBooks} book={book} userInfo={userInfo} key={book._id}></BorrowedBook>)
            }
        </div>
    );
};

export default BorrowedBooks;