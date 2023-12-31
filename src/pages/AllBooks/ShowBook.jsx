import UpdateBook from "./UpdateBook";
import PropTypes from 'prop-types';
const ShowBook = ({ book }) => {
    const { _id, imageUrl, name, bookQuantity, authorName, rating, categoryName } = book;
    return (
        <div className="card border-2 border-fuchsia-600 mx-5 my-2 shadow-lg rounded-sm p-5">
            <figure><img className="object-cover w-full h-96 md:h-56" src={imageUrl} alt="Shoes" /></figure>
            <div className="my-2">
                <p><span className="text-fuchsia-600 font-semibold">Name:</span> {name}</p>
                <p><span className="text-fuchsia-600 font-semibold">Category:</span> {categoryName}</p>
                <p><span className="text-fuchsia-600 font-semibold">Author:</span> {authorName}</p>
                <p><span className="text-fuchsia-600 font-semibold">Rating:</span> {rating}</p>
                <p><span className="text-fuchsia-600 font-semibold">Available Quantity:</span> {bookQuantity}</p>
                {/* <p><span className="text-fuchsia-600 font-semibold">Description:</span> {description}</p> */}
                <div className="text-center mt-10">
                    {
                        <UpdateBook id={_id}></UpdateBook>
                    }
                </div>
            </div>
        </div>
    );
};
ShowBook.propTypes={
    book: PropTypes.object
}
export default ShowBook;