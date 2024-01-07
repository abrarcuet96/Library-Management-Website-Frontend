import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
const Login = () => {
    const highlightText = {
        background: 'linear-gradient(to bottom, transparent 50%,  rgb(30, 64, 175) 50%)'
    }
    const { signIn, googleSignIn,loading, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    Swal.fire({
                        icon: "success",
                        title: "You are successfully logged in",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/');
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Please verify your email!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Please give valid email and password!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoading(false);
            })

    }
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                
                if (res.user) {
                    Swal.fire({
                        icon: "success",
                        title: "You are successfully logged in",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/');
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Please verify your email!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Please give valid email and password!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="hero min-h-screen bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-300 to-purple-400" >
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className=" text-2xl lg:text-5xl font-bold text-slate-800">Open the Book of Knowledge: Login to Your BookWorm Account.<br />- <span className="text-slate-200 font-bold" style={highlightText}>Log in Here!</span></h1>
                    <p className="py-6 text-xl text-slate-800 font-semibold">Dive into a world of knowledge with a single login – your gateway to an enriched library experience at BookWorm.</p>
                    <Link to="/">
                        <div className="flex justify-center items-center gap-2 text-white hover:text-blue-300">
                            <div><FaArrowLeft /></div>
                            <h2 className="text-lg font-semibold hover:text-blue-300 hover:border-b-4 hover:border-blue-300">Home</h2>
                        </div>
                    </Link>
                </div>

                <div className="card shrink-0 lg:w-1/2 max-w-sm  backdrop-blur-sm bg-white/30 rounded-none">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400 border-none text-xl">
                                {
                                    loading ? <ImSpinner9 className="animate-spin" /> : <p>Login</p>
                                }
                            </button>
                        </div>
                        <div className="text-center flex items-center bg-slate-300 rounded-lg p-2 mt-3">
                            <p className="font-semibold">or, Login with google</p>
                            <button onClick={handleGoogleSignIn} className="btn"><FaGoogle></FaGoogle></button>
                        </div>
                        <p className="text-center text-lg">Do not have an account? <Link to="/register" className="font-semibold text-white">Register</Link></p>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;