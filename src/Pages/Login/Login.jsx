import React from 'react';
import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../ProviedrsOrContext/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    //const captchaRef= useRef(null)
    const [disabled, setDisabled]= useState(true)
    const {login}=useContext(AuthContext)
    useEffect(()=>{
        
            loadCaptchaEnginge(6); 
         
    },[])



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        const data= {email, password, captcha}
        console.log(data);
        login(email,password)
        .then(result =>{
            const user = result.user
            if(result.user){
                // alert('Login Successfull')
                Swal.fire({
                    title: "Login Successfull",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                form.reset()
            }
        })
        .catch(error =>{
            const errorLine = error.message;
            console.log(errorLine);
            alert(errorLine)
        })
    }

    const handleCaptchaValidate =(e)=>{
        //ref এর পরিবর্তে event.target use করলাম
       // const user_captcha_value = captchaRef.current.value;
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else(setDisabled(true))
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content lg:flex">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className='label'>
                                < LoadCanvasTemplateNoReload />
                                </label>
                                {/* input এর field যদি change হয় তাহলে onChange হবে। ref এর পরিবর্তে evernt.target use করলাম , এজন্য input থেকে ref={captchaRef} উঠিয়ে দিলাম। onChange={handleCaptchaValidate} use করলে প্রতি type এ captcha change হয়ে যাবে, তাই onBlur use করবো
                                The issue with the CAPTCHA reloading on every keystroke is because onChange triggers every time the input value changes. This can cause the CAPTCHA component to re-render and reload. Switching to onBlur only triggers the validation when the input loses focus, which prevents the frequent reloading.
                                */}
                                <input  onBlur={handleCaptchaValidate} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                                {/* <button onClick={handleCaptchaValidate}  className='btn btn-outline btn-xs'>Validate</button> */}
                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='text-[#D1A054] text-center'>New here?<Link to='/signup'><span className='link'>Create a New Account</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;