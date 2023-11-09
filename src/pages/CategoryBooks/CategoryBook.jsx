import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const CategoryBook = ({ book }) => {
    const { _id, imageUrl, name, bookQuantity, authorName, rating, categoryName,description } = book;
    return (
        <div className="card border-2 border-orange-500 mx-5 my-2 shadow-lg rounded-sm p-5">
            <figure><img src={imageUrl} alt="Shoes" /></figure>
            <div className="my-2">
                <p><span className="text-orange-600 font-semibold">Name:</span> {name}</p>
                <p><span className="text-orange-600 font-semibold">Category:</span> {categoryName}</p>
                <p><span className="text-orange-600 font-semibold">Author:</span> {authorName}</p>
                <p><span className="text-orange-600 font-semibold">Rating:</span> {rating}</p>
                <p><span className="text-orange-600 font-semibold">Available Quantity:</span> {bookQuantity}</p>
                <p><span className="text-orange-600 font-semibold">Description:</span> {description}</p>
            </div>
            <div className="card-body text-center w-full">
                <Link to={`/bookDetails/${_id}`}><button className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-full">Details</button></Link>
            </div>
        </div>
    );
};
CategoryBook.propTypes={
    book: PropTypes.object
}
export default CategoryBook;