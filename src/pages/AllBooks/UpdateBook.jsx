import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const UpdateBook = ({id}) => {
    return (
        <div>
            <Link to={`/updateBookDetails/${id}`}>
                <button className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-fuchsia-600 hover:text-fuchsia-600 p-2 w-[200px]">Update</button>
            </Link>
        </div>
    );
};
UpdateBook.propTypes={
    id: PropTypes.string
}
export default UpdateBook;