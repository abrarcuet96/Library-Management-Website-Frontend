import { useEffect, useState } from "react";
import ShowBook from "./ShowBook";

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addedBook')
            .then(res => res.json())
            .then(data => setAllBooks(data));
    }, []);
    const handleFilter=()=>{
        fetch('http://localhost:5000/addedBook')
        .then(res=>res.json())
        .then(data=>{
            const filteredData= data.filter(item=> parseInt(item.bookQuantity) > 0);
            setAllBooks(filteredData);
        })
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <button onClick={handleFilter} className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-[200px]">Filter</button>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    allBooks.map(book => <ShowBook key={book._id} book={book}></ShowBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;