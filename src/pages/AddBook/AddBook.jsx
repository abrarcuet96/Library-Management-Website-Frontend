import Swal from "sweetalert2";
const AddBook = () => {
    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const imageUrl = form.imageUrl.value;
        const name = form.name.value;
        const bookQuantity = form.bookQuantity.value;
        const authorName = form.authorName.value;
        const categoryName = form.categoryName.value;
        const rating = form.rating.value;
        const description=form.description.value;
        const myAddedBookDetails = {
            imageUrl, name, bookQuantity, authorName, categoryName, rating, description
        };
        fetch('https://abrar-library-server-msoqofm1u-abrars-projects-bbcef6d7.vercel.app/addedBook', {
            method: 'POST',
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
                        confirmButtonText: "Yes, add it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Added",
                                text: "Your book has been added.",
                                icon: "success"
                            });
                        }
                    });
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-tr from-violet-500 to-orange-300">
            <div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl backdrop-blur-sm bg-white/30 rounded-md">
                    <form onSubmit={handleAddBook} className="card-body">
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="imageUrl" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Quantity</span>
                                </label>
                                <input type="number" name="bookQuantity" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <input type="text" name="authorName" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="categoryName" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="description" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                            </div>
                        <div className="form-control mt-6">
                            <button className="border-2 font-semibold text-slate-600 border-slate-600 hover:border-fuchsia-600 hover:text-fuchsia-600 p-2 w-full" type="submit">Add Books
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;