
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateBookDetails = () => {
    const loadedBooks= useLoaderData();
    console.log(loadedBooks);
    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const name = form.name.value;
        const bookQuantity = form.bookQuantity.value;
        const authorName = form.authorName.value;
        const categoryName = form.categoryName.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const myAddedBookDetails = {
            imageUrl, name, bookQuantity, authorName, categoryName, rating, description
        };
        fetch(`http://localhost:5000/addedBook/${loadedBooks._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(myAddedBookDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Are You Sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Update it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Updated",
                                text: "Your book has been updated.",
                                icon: "success"
                            });
                        }
                    });
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-orange-950">
            <div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 rounded-md">
                    <form onSubmit={handleUpdateBook} className="card-body">
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="imageUrl" defaultValue={loadedBooks.imageUrl} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={loadedBooks.name} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Quantity</span>
                                </label>
                                <input type="number" name="bookQuantity" defaultValue={loadedBooks.bookQuantity} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <input type="text" name="authorName" defaultValue={loadedBooks.authorName} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="categoryName" defaultValue={loadedBooks.categoryName} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating" defaultValue={loadedBooks.rating} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={loadedBooks.description} className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="border-2 font-semibold text-slate-600 border-slate-600 hover:border-orange-600 hover:text-orange-600 p-2 w-full" type="submit">Update Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBookDetails;