import React from 'react';
import {  useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../ProviedrsOrContext/AuthProvider";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset, // Importing reset method from react-hook-form
        formState: { errors },
    } = useForm()
    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if(loggedUser){
                alert('User Created Successfully')
                reset()
            }
        })
        .catch(error =>{
            console.log(error.message);
        })
    }


    // const handleSignup = (e) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);
    // }
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Signup
                </title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                {/* defaultValue-initial কোন মান টা থাকবে সেইটা এবং এটাকে register করতে হবে , register-এই যে field টা আছে এইটা আমার কি নামে ডাটা আসবে সেইটা *
                                */}
                                <input type="text" defaultValue="" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <span className="text-red-800">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className="text-red-800">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 10, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ })} 
                                name='password' placeholder="password" className="input input-bordered"  />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-800">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-800">Password must be 6 Characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-800">Password have to be between 10 Characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-800">Password must have Digits,One uppercase, One Lowercase & One special Caharacters</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#D1A054]">Sign Up</button>
                            </div>
                            <p className='text-[#D1A054] text-center'>Already registered? <Link to='/login'><a href="" className='link'>Go to log in</a></Link></p>
                        </form>
                        <div className="flex flex-col items-center  gap-5 mb-5">
                            <small className="text-[#444444] font-medium text-xl">Or sign up with</small>
                            <div className="flex gap-4 text-3xl">
                                <CiFacebook />
                                <FaGoogle />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;