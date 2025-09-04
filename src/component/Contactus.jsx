import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Contactus() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const info = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/awnyyojb", info);
            toast.success("Your message has been sent ✅");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong ❌");
        }
    };

    return (
        <div
            name="Contact us"
            className="max-w-screen-2xl bg-gradient-to-b from-[#6D28D9] to-[#A78BFA] container mx-auto px-4 md:px-20 py-16"
        >
            <Toaster />
            <h2 className="text-center text-4xl font-bold text-purple-300 drop-shadow-[0_2px_15px_rgba(168,85,247,0.9)] mb-10">
                Contact Us
            </h2>


            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="https://getform.io/f/anlxkxqa"
                    method="POST"
                    className="w-full md:w-[500px] px-8 py-8 
                     rounded-2xl shadow-2xl 
                     bg-white/10 backdrop-blur-md 
                     border border-white/20 text-white"
                >
                    <h1 className="text-2xl font-semibold mb-6 text-center drop-shadow">
                        Send Your Message
                    </h1>

                    {/* Name Field */}
                    <div className="flex flex-col mb-4">
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            className="bg-white/20 text-white placeholder-white/70 
                         border border-white/30 rounded py-2 px-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span className="text-red-300 text-sm mt-1">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col mb-4">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            className="bg-white/20 text-white placeholder-white/70 
                         border border-white/30 rounded py-2 px-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-300 text-sm mt-1">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col mb-4">
                        <label className="block text-sm mb-1">Message</label>
                        <textarea
                            className="bg-white/20 text-white placeholder-white/70 
                         border border-white/30 rounded py-2 px-3 
                         h-32 resize-none 
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
                            name="message"
                            placeholder="Type your message here..."
                            {...register("message", { required: true })}
                        />
                        {errors.message && (
                            <span className="text-red-300 text-sm mt-1">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 
                       text-white font-bold py-2 px-4 rounded-lg 
                       hover:opacity-90 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contactus;
