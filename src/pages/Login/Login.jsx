import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {


        googleSignIn()
            .then(res => {
                console.log(res.user);
                toast("You are successfully logged in");
            })
            .catch(err => {
                console.log(err);
            })

    }
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        setRegisterError('');
        setSuccess('');
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                if (res.user.emailVerified) {
                    setSuccess('Logged in Successfully');
                }
                else {
                    setSuccess('Please verify your email address');
                }
                console.log(res.user);
                navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                console.log(err);
                setRegisterError(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-orange-950">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-white">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered border-2 border-slate-600 rounded-sm" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="border-2 font-semibold text-slate-600 border-slate-600 hover:border-orange-600 hover:text-orange-600 p-2 w-full">Login</button>
                        </div>
                        <div className="text-center flex items-center bg-slate-300 rounded-lg p-2">
                            <p className="mb-2 font-semibold">or, Login with google</p>
                            <button onClick={handleGoogleSignIn} className="btn"><FaGoogle></FaGoogle></button>
                            <ToastContainer></ToastContainer>
                        </div>
                        <p className="text-center">Do not have an account? <Link className="font-semibold text-blue-600" to="/register">Register</Link></p>
                    </form>
                    {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Login;