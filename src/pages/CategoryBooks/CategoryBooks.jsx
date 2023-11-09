import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBook from "./CategoryBook";

const CategoryBooks = () => {
    const { id } = useParams();
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch('/bookCategory.json')
            .then(res => res.json())
            .then(data => {
                const findCategory = data.find(book => book.id == id);
                setBook(findCategory);
            })
    }, [id])

    useEffect(() => {
        fetch('http://localhost:5000/addedBook')
            .then(res => res.json())
            .then(data => {
                const filteredBooks = data.filter(catBook => catBook.categoryName == book.categoryName);
                setBooks(filteredBooks);
            });
    }, [book.categoryName])
    console.log(books);
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {
                books.map(book=> <CategoryBook key={book._id} book={book}></CategoryBook>)
            }
        </div>
    );
};

export default CategoryBooks;