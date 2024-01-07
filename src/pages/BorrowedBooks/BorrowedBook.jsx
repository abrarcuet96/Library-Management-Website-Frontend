import { useEffect, useState } from 'react';
import HandleReturn from '../HandleReturn/HandleReturn';
import PropTypes from 'prop-types';
const BorrowedBook = ({ book, userInfo, books, setBooks, loading }) => {
    const { _id, imageUrl, name, categoryName, bookQuantity } = book;
    const [userInfoDetails, setUserInfoDetails] = useState({});
    useEffect(() => {
        const info = userInfo.find(user => user.bookName == name);
        setUserInfoDetails(info);
    }, [name, userInfo]);
    return (
        <div>
            {
                loading ? '' :
                    <div className="flex gap-5 flex-col lg:flex-row shadow-xl border-2 border-orange-600 p-2">
                        <div className="w-1/2">
                            <img className="rounded-lg object-cover w-full h-96 md:h-56" src={imageUrl} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col justify-center mb-2 flex-grow">
                                <p><span className="text-orange-600 font-semibold text-2xl">Name:</span> {name}</p>
                                <p><span className="text-orange-600 font-semibold text-2xl">Category:</span> {categoryName}</p>
                                <p><span className="text-orange-600 font-semibold text-2xl">Return Date:</span> {userInfoDetails.returnDate}</p>
                                <p><span className="text-orange-600 font-semibold text-2xl">Borrowed Date:</span> {userInfoDetails.formattedDate}</p>
                                <HandleReturn books={books} setBooks={setBooks} id={_id} bookQuantity={bookQuantity}></HandleReturn>
                            </div>
                        </div>
                    </div>
            }
        </div>


    );
};
BorrowedBook.propTypes = {
    book: PropTypes.object,
    books: PropTypes.array,
    userInfo: PropTypes.array,
    setBooks: PropTypes.func,
    loading: PropTypes.bool
}
export default BorrowedBook;