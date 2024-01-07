import { useContext, useEffect, useState } from "react";
import BorrowedBook from "./BorrowedBook";
import { AuthContext } from "../../providers/AuthProviders";

const BorrowedBooks = () => {
    const {user}= useContext(AuthContext);
    const {email}= user;
    const url=`https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/borrowedPageBooks?email=${email}`
    const [books, setBooks] = useState([]);
    const [userInfo, setUserInfo]= useState([]);
    const [loading, setLoading]= useState(false);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            setLoading(true);
            setBooks(data);
            setLoading(false);
        })
    },[url])
    useEffect(()=>{
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/userInfo')
        .then(res=>res.json())
        .then(data=> {
            setLoading(true);
            setUserInfo(data);
            setLoading(false);
        })
    },[])

    return (
        <div className="grid grid-cols-1  max-w-screen-xl mx-auto gap-2 p-2 min-h-[100vh]">
            { loading? '':
                books.map(book=> <BorrowedBook books={books} setBooks={setBooks} loading={loading} book={book} userInfo={userInfo} key={book._id}></BorrowedBook>)
            }
        </div>
    );
};

export default BorrowedBooks;