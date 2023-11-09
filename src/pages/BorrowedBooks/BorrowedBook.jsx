import { useEffect, useState } from 'react';
import HandleReturn from '../HandleReturn/HandleReturn';
import PropTypes from 'prop-types';
const BorrowedBook = ({ book ,userInfo, books, setBooks}) => {
    const { _id, imageUrl, name, categoryName, bookQuantity } = book;
    const [userInfoDetails, setUserInfoDetails]= useState({});
    useEffect(()=>{
        const info= userInfo.find(user=> user.bookName == name);
        setUserInfoDetails(info);
    },[name, userInfo]);
    return (
                <div className="flex gap-5 flex-col lg:flex-row shadow-xl border-2 border-orange-600 p-2">
                    <div className="w-1/2">
                        <img className="rounded-lg w-full" src={imageUrl} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-2 flex-grow">
                            <p><span className="text-orange-600 font-semibold">Name:</span> {name}</p>
                            <p><span className="text-orange-600 font-semibold">Category:</span> {categoryName}</p>
                            <p><span className="text-orange-600 font-semibold">Return Date:</span> {userInfoDetails.returnDate}</p>
                            <p><span className="text-orange-600 font-semibold">Borrowed Date:</span> {userInfoDetails.formattedDate}</p>
                            <HandleReturn books={books} setBooks={setBooks} id={_id} bookQuantity={bookQuantity}></HandleReturn>
                        </div>
                    </div>
                </div>
            
    );
};
BorrowedBook.propTypes={
    book: PropTypes.object,
    books: PropTypes.array,
    userInfo: PropTypes.object,
    setBooks:  PropTypes.func
}
export default BorrowedBook;