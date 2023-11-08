import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { AuthContext } from "../../providers/AuthProviders";

const RegistrationSection = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setRegisterError('Your password should have at least one upper case character');
            return;
        }
        else if (!/^(?=.*[\W_]).+$/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return;
        }
        createUser(name, email, password)
            .then(res => {
                console.log(res.user);
                setSuccess('User created successfully');
            })
            .catch(err => {
                console.log(err);
                setRegisterError(err.message);
            })
    }

    return (
        <div className="hero min-h-screen my-12" style={{ backgroundImage: 'url(https://i.ibb.co/h7vNmFJ/Getty-Images-900301626-437925-t2i3bm.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300 rounded-none">
                            <h2 className="text-4xl text-center text-black font-semibold my-5">Please Register!!</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <p className="text-center text-black">Already have an account? <Link className="font-semibold text-purple-600" to="/login">Login</Link></p>
                                {
                                    registerError && <p className="text-red-600 text-center">{registerError}</p>
                                }
                                {
                                    success && <p className="text-green-600 text-center">{success}</p>
                                }
                            </form>
                        </div>
                        <div className="text-center lg:text-left bg-slate-800 bg-opacity-50 p-5 rounded-lg">
                            <h1 className="text-5xl font-bold text-center">Our Goal</h1>
                            <p className="py-6 text-justify">To inspire a love for reading, provide a diverse collection of books, and foster a thriving online community of book enthusiasts.This goal emphasizes the promotion of reading, the availability of a wide range of books, and the creation of a vibrant community around books. Your website can aim to achieve this goal by offering various features, such as book recommendations, user reviews, author interviews, and book-related discussions to engage and connect readers.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSection;