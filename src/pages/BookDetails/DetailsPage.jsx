import HandleBorrow from "../HandleBorrow/HandleBorrow";
import HandleRead from "../HandleRead/HandleRead";
import PropTypes from 'prop-types';
const DetailsPage = ({ book, setBook, borrowedItems, setBorrowedItems }) => {
    const { _id, imageUrl, name, bookQuantity, authorName, rating, categoryName, description } = book;
    return (
        <div className=" max-w-screen-xl mx-auto mb-10 h-[70vh]">
            <div className="border-2 border-orange-600 rounded-md p-5 flex justify-center">
                <div className="flex gap-5 flex-col lg:flex-row  ">
                    <div className="w-1/2">
                        <img className="rounded-lg h-[50vh]" src={imageUrl} alt="" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="flex flex-col mb-2 flex-grow">
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Name:</span> {name}</p>
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Category:</span> {categoryName}</p>
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Author:</span> {authorName}</p>
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Rating:</span> {rating}</p>
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Available Quantity:</span> {bookQuantity}</p>
                            <p className="text-xl lg:text-2xl"><span className="text-orange-600 font-semibold">Description:</span> {description}</p>
                        </div>

                        <div className="flex gap-2">
                            <HandleBorrow borrowedItems={borrowedItems} setBook={setBook} setBorrowedItems={setBorrowedItems} book={book} id={_id} bookQuantity={bookQuantity}></HandleBorrow>
                            <HandleRead></HandleRead>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};
DetailsPage.propTypes={
    book: PropTypes.object,
    setBook: PropTypes.func,
    borrowedItems: PropTypes.func,
    setBorrowedItems:  PropTypes.func
}
export default DetailsPage;