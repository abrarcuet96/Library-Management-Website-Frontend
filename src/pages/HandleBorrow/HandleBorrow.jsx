import { useState } from 'react';
import DateModal from '../../components/Modal/DateModal';

const HandleBorrow = ({bookQuantity, id, setBook, book,borrowedItems, setBorrowedItems}) => {
    const intQuantity= parseInt(bookQuantity);
    const [isModalOpen, setIsModalOpen] =useState(false);
    const openModal=()=>{
        setIsModalOpen(true);
    };
    const closeModal=()=>{
        setIsModalOpen(false);
    };
    return (
        <div>
            {
                intQuantity>0? <button onClick={openModal} className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-orange-600 hover:text-orange-600 p-2 w-[200px]">Borrow</button>:
                <button onClick={openModal} className="border-2 font-semibold text-slate-900 border-slate-900 p-2 w-[200px]" disabled>Borrow</button>
            }
            <DateModal borrowedItems={borrowedItems} setBook={setBook} setBorrowedItems={setBorrowedItems} book={book} id={id} bookQuantity={bookQuantity} isOpen={isModalOpen} onRequestClose={closeModal}></DateModal>
        </div>
    );
};

export default HandleBorrow;