import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const navLinks = <>
        <li className="text-lg font-semibold">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="text-lg font-semibold">
            <NavLink
                to="/addBook"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600" : ""
                }
            >
                Add Book
            </NavLink>
        </li>
        <li className="text-lg font-semibold">
            <NavLink
                to="/allBooks"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600" : ""
                }
            >
                All Books
            </NavLink>
        </li>
        <li className="text-lg font-semibold">
            <NavLink
                to="/borrowedBooks"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange-600" : ""
                }
            >
                Borrowed Books
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar my-5">
            <div className="mx-auto">
                <div className="navbar-start bg-transparent flex items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl font-bold text-white">
                        <div className="flex items-center gap-5">

                            <img className="w-10" src="https://i.ibb.co/mCr8ggP/opened-book-3169.png" alt="" />

                            <div className="text-black">BookWorm</div>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex mx-56">
                    <ul className="flex gap-14">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="text-lg font-semibold" to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;