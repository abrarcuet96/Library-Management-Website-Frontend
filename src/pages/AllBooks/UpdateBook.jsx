import { Link } from "react-router-dom";

const UpdateBook = ({id}) => {
    return (
        <div>
            <Link to={`/updateBookDetails/${id}`}>
                <button className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-[200px]">Update</button>
            </Link>
        </div>
    );
};

export default UpdateBook;