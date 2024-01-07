import { useState } from 'react';
import DateModal from '../../components/Modal/DateModal';
import PropTypes from 'prop-types';
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
                intQuantity>0? <button onClick={openModal} className="border-2 font-semibold text-slate-900 border-slate-900 hover:border-fuchsia-600 hover:text-fuchsia-600 p-2 w-[200px]">Borrow</button>:
                <button onClick={openModal} className="border-2 font-semibold text-slate-900 border-slate-900 p-2 w-[200px]" disabled>Borrow</button>
            }
            <DateModal borrowedItems={borrowedItems} setBook={setBook} setBorrowedItems={setBorrowedItems} book={book} id={id} bookQuantity={bookQuantity} isOpen={isModalOpen} onRequestClose={closeModal}></DateModal>
        </div>
    );
};
HandleBorrow.propTypes={
    bookQuantity: PropTypes.string,
    id: PropTypes.string,
    setBook: PropTypes.func,
    book: PropTypes.object,
    borrowedItems: PropTypes.array, 
    setBorrowedItems: PropTypes.func
}
export default HandleBorrow;