import React, { useEffect, useState } from 'react';
import HandleReturn from '../HandleReturn/HandleReturn';

const BorrowedBook = ({ book ,userInfo, books, setBooks}) => {
    const { _id, imageUrl, name, categoryName } = book;
    const [userInfoDetails, setUserInfoDetails]= useState({});
    useEffect(()=>{
        const info= userInfo.find(user=> user.bookName == name);
        setUserInfoDetails(info);
    },[name, userInfo]);
    const [availableQuantity, setAvailableQuantity]= useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/borrowedPageBooks/${_id}`)
        .then(res=>res.json())
        .then(data=> setAvailableQuantity(data));
    },[_id])
    console.log(availableQuantity);
    return (
                <div className="flex gap-5 flex-col lg:flex-row shadow-xl ">
                    <div className="w-1/2">
                        <img className="rounded-lg w-full" src={imageUrl} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-2 flex-grow">
                            <p><span className="text-orange-600 font-semibold">Name:</span> {name}</p>
                            <p><span className="text-orange-600 font-semibold">Category:</span> {categoryName}</p>
                            <p><span className="text-orange-600 font-semibold">Return Date:</span> {userInfoDetails.returnDate}</p>
                            <p><span className="text-orange-600 font-semibold">Borrowed Date:</span> {userInfoDetails.formattedDate}</p>
                            <HandleReturn availableQuantity={availableQuantity} books={books} setBooks={setBooks} id={_id}></HandleReturn>
                        </div>
                    </div>
                </div>
            
    );
};

export default BorrowedBook;