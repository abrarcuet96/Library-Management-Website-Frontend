import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BookCategory = ({category}) => {
    const {id, image, categoryName}= category;
    return (
        <div className="card border-2 border-orange-500 p-1 mx-5 my-2 shadow-lg rounded-sm">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-bold text-orange-600">{categoryName}</h2>
                <Link to={`/categoryBooks/${id}`}><button className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-full">See Books</button></Link>
            </div>
            <figure><img src={image} alt="Shoes" /></figure>
        </div>
    );
};
BookCategory.propTypes={
    category: PropTypes.object
}
export default BookCategory;