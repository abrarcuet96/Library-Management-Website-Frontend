import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
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
        <div className="navbar max-w-screen-xl mx-auto my-5">
            <div className="navbar-start bg-transparent">
                <div className="dropdown gap-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <div className="flex items-center gap-2">

                    <img className="w-10" src="https://i.ibb.co/mCr8ggP/opened-book-3169.png" alt="" />

                    <div className="text-black font-bold text-xl">BookWorm</div>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-14">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="flex flex-row">
                            <div className="bg-white mr-2 p-1 rounded-lg max-sm:hidden  w-full">
                                <span className="w-30 h-2 m-2 font-semibold">{user?.displayName}</span>

                            </div>
                            <img className="w-8 h-8 mr-2 rounded-full" src={user?.photoURL} alt="" />
                            <button onClick={handleSignOut}><Link className="text-lg font-semibold" to="/login">SignOut</Link></button>
                        </div>
                    </>
                    :
                    <Link className="text-lg font-semibold" to="/login">Login</Link>
                }
            </div>

        </div>


    );
};

export default NavBar;