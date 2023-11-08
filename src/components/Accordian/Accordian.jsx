
const Accordian = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 border-2 p-10 rounded-lg">
            <h2 className="main text-center text-4xl font-bold mb-5">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                How can I borrow books from your library?
                </div>
                <div className="collapse-content">
                    <p>Borrowing books from our library is easy! Simply create an account on our website, search for the book you want to borrow, and click the "Borrow" button. You can enjoy the book for a specified borrowing period, and it will be automatically returned when the due date arrives.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I suggest books to be added to your collection?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We welcome book suggestions from our community. If there's a book you'd like to see in our library, you can use the "Suggest a Book" feature on our website. Our team will review your suggestion and consider adding it to our collection.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do I participate in book discussions and connect with other readers?
                </div>
                <div className="collapse-content">
                    <p>You can engage in book discussions and connect with fellow readers by joining our online book club and forums. Visit the "Community" section on our website to find and join ongoing discussions, share your thoughts on books, and connect with like-minded book enthusiasts. We encourage active participation and the exchange of literary ideas!</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;