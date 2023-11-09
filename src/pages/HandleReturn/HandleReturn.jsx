import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const HandleReturn = ({id, books, setBooks}) => {
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(res => {
            if (res.isConfirmed) {
                fetch(`http://localhost:5000/borrowedPageBooks/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Product deleted successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            const remainingBooks = books.filter(item => item._id !== id);
                            setBooks(remainingBooks);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <button onClick={() => handleDelete(id)} className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-[200px]">Return</button>
        </div>
    );
};

export default HandleReturn;