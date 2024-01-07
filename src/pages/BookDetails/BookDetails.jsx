import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const BookDetails = () => {
    const [book, setBook]= useState([]);
    const {id}= useParams();
    console.log(id);

    useEffect(()=>{
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/addedBook')
        .then(res=>res.json())
        .then(data=> {
            const findBook= data.find(book=> book._id == id);
            setBook(findBook);
        })
    },[id]);
    const [borrowedItems, setBorrowedItems]= useState([]);
    useEffect(()=>{
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/borrowedPageBooks')
        .then(res=>res.json())
        .then(data=> setBorrowedItems(data));
    },[])
    return (
        <div>
            {
                <DetailsPage borrowedItems={borrowedItems} setBook={setBook} setBorrowedItems={setBorrowedItems} key={id} book={book}></DetailsPage>
            }
        </div>
    );
};

export default BookDetails;