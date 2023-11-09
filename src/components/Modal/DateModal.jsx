import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';


const DateModal = ({ isOpen, onRequestClose, id, book, setBook, borrowedItems, setBorrowedItems }) => {
    const { bookQuantity, name } = book;
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    const [selectedDate, setSelectedDate] = useState('');
    const [quantity, setQuantity] = useState("");
    useEffect(() => {
        const intQuantity = parseInt(bookQuantity);
        const updateQuantity = intQuantity - 1;
        const strQuantity = updateQuantity.toString();
        setQuantity(strQuantity);
    }, [bookQuantity])
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const returnDate = form.returnDate.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        console.log(formattedDate);
        const userInfo = {
            email, displayName, returnDate, formattedDate, bookName: name
        };
        
        fetch('http://localhost:5000/userInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });
        onRequestClose();
    }

    const handleSubmitDatabase = id => {
        const isExist = borrowedItems.find(item => item.name == book.name);
        if (isExist) {
            Swal.fire({
                title: 'Stop!!',
                text: 'Book is already borrowed',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, borrow it!'
            }).then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/addedBook/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ quantity })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                Swal.fire({
                                    title: 'success!',
                                    text: 'Book is borrowed successfully',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                })

                            }
                        })
                    const { imageUrl, name, bookQuantity, authorName, rating, categoryName, description } = book;
                    const myBooks = { imageUrl, name, bookQuantity, authorName, rating, categoryName, description };
                    console.log(myBooks);
                    fetch('http://localhost:5000/borrowedPageBooks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(myBooks)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                Swal.fire({
                                    title: 'success!',
                                    text: 'Book is borrowed successfully',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                })
                            }
                            setBorrowedItems([...borrowedItems, myBooks])
                        })
                }
            })
        }
    }




    return (

        <Modal className="w-[400px] h-[200px] flex justify-center items-center bg-slate-300 border-2 border-orange-600 rounded-lg" isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel='Date Modal'
            ariaHideApp={false}
            style={{
                overlay: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
        >
            <form onSubmit={handleSubmit}>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <div>
                        <label htmlFor="dateInput">Return Date:</label>
                    </div>
                    <div>
                        <input type="date" name="returnDate" id="dateInput" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => handleSubmitDatabase(id)} type="submit" className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-full">Submit</button>

                    </div>
                </div>
            </form>

        </Modal>

    );
};

export default DateModal;