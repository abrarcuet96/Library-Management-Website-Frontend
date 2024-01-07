import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const RegistrationSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0y6tdqa', 'template_6agneep', form.current, '4N5pmSTsoRg7yh2YL')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                toast.success("message sent successfully");

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="hero min-h-[60vh] my-12" style={{ backgroundImage: 'url(https://i.ibb.co/h7vNmFJ/Getty-Images-900301626-437925-t2i3bm.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div
                        className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold text-fuchsia-400">Let us Connect!</h1>
                        <p className="py-6 text-3xl text-fuchsia-100">Ready to collaborate? Send us an email.</p>
                    </div>
                    <div
                        className="card shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-sm bg-white/30 rounded-none">
                        <form className="card-body" ref={form} onSubmit={sendEmail}>
                            <label className='text-base-300 font-semibold'>Your Name</label>
                            <input className='bg-base-300 text-black p-2' type="text" name="user_name" />
                            <label className='text-base-300 font-semibold'>Your Email</label>
                            <input className='bg-base-300 text-black p-2' type="email" name="user_email" />
                            <label className='text-base-300 font-semibold'>Message</label>
                            <textarea className='bg-base-300 text-black p-2' name="message" />
                            <div className='text-center mt-6'>
                                <button type="submit" className='btn btn-lg w-full'>Send</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster />
        </div>
    );
};

export default RegistrationSection;