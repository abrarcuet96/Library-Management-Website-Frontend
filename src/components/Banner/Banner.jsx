
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sVQvwgx/book-library-with-open-textbook-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">LitScapes: Your Passport to Uncharted Stories</h1>
                    <p className="mb-5">Dive into the extraordinary world of LitScapes, where each book is a doorway to uncharted adventures, untold secrets, and unforgettable journeys. Your next story is waiting to be discovered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;