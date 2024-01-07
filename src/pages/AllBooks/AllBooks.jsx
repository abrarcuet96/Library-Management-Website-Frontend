import { useEffect, useState } from "react";
import ShowBook from "./ShowBook";

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/addedBook')
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);
    const handleFilter=()=>{
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/addedBook')
        .then(res=>res.json())
        .then(data=>{
            const filteredData= data.filter(item=> parseInt(item.bookQuantity) > 0);
            setAllBooks(filteredData);
        })
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={handleFilter} className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-fuchsia-600 hover:text-fuchsia-600 p-2 w-[200px]">Filter</button>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    allBooks.map(book => <ShowBook key={book._id} book={book}></ShowBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;