import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProviders";
const image_hosting_key= import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [uploadButton, setUploadButton] = useState('Upload Image');
    const highlightText = {
        background: 'linear-gradient(to bottom, transparent 50%,  rgb(30, 64, 175) 50%)'
    }
    const handleImageText = image => {
        setUploadButton(image.name);
    }
    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(name,email,password);
        const { data } = await axios.post(image_hosting_api, formData,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
        console.log(data);
        console.log(name, email, password, data.data.display_url);
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or long');
            setLoading(false);
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Your password should have at least one upper case character');
            setLoading(false);
            return;
        }
        else if (!/^(?=.*[\W_]).+$/.test(password)) {
            toast.error('Your password should have at least one special character');
            setLoading(false);
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                updateUserProfile(name, data.data.display_url)
                .then(()=>{
                    console.log(res);
                    if(res.user){
                        Swal.fire({
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state ? location.state : '/');
                    }
                })
                
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
                setLoading(false);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-2xl lg:text-5xl font-bold text-slate-800">Empower Your Reading Journey: Register with BookWorm Today!<br />– <span className="text-slate-200 font-bold" style={highlightText}>Register Today!</span></h1>
                        <p className="py-6 text-xl text-slate-800 font-semibold">Unlock the door to a world of literary wonders – register with BookWorm for a seamless and personalized reading experience.</p>
                        <Link to="/">
                            <div className="flex justify-center items-center gap-2 text-white hover:text-blue-300">
                                <div><FaArrowLeft /></div>
                                <h2 className="text-lg font-semibold hover:text-blue-300 hover:border-b-4 hover:border-blue-300">Home</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="card shrink-0 lg:w-1/2 max-w-sm  backdrop-blur-sm bg-white/30 rounded-none">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className=' p-2 bg-white w-full  mt-5 rounded-lg'>
                                <div className='file_upload px-3 py-2 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col  text-center'>
                                        <label>
                                            <input
                                                onChange={e => handleImageText(e.target.files[0])}
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='btn btn-primary bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400 text-white border border-gray-300 font-semibold cursor-pointer p-1 px-3 w-full rounded-lg'>
                                                {uploadButton}
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-5">
                                <button className="btn btn-primary bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400 border-none text-xl text-white">
                                    {
                                        loading ? <ImSpinner9 className="animate-spin" /> : <p>Register</p>
                                    }
                                </button>

                            </div>
                            <p className="text-center text-xl">Already have an account? <Link to="/login" className="font-semibold text-white">Login</Link></p>
                        </form>
                    </div>
                </div>


            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;