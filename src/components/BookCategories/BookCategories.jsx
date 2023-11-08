import { useEffect } from "react";
import { useState } from "react";
import BookCategory from "./BookCategory";

const BookCategories = () => {
    const [catgeories, setCategories]= useState([]);
    useEffect(()=>{
        fetch('bookCategory.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {
                catgeories.map(category=> <BookCategory key={category.id} category={category}></BookCategory>)
            }
        </div>
    );
};

export default BookCategories;