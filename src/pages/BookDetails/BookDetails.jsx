import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const BookDetails = () => {
    const [book, setBook]= useState([]);
    const {id}= useParams();
    console.log(id);

    useEffect(()=>{
        fetch('http://localhost:5000/addedBook')
        .then(res=>res.json())
        .then(data=> {
            const findBook= data.find(book=> book._id == id);
            setBook(findBook);
        })
    },[id])
    return (
        <div>
            {
                <DetailsPage key={id} book={book}></DetailsPage>
            }
        </div>
    );
};

export default BookDetails;