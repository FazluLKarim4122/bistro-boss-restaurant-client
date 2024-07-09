import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef= useRef(null)
    const [disabled, setDisabled]= useState(true)
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
    }

    const handleCaptchaValidate =()=>{
        const user_captcha_value = captchaRef.current.value;
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
                                < LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                                <button onClick={handleCaptchaValidate}  className='btn btn-outline btn-xs'>Validate</button>
                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;