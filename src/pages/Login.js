import React from 'react';
import { AuthState } from '../context/Context';

const Login = () => {
    const { user, login } = AuthState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const target = e.target;
        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;

        login(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                target.reset();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className='login_section px-16 py-20'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} action=" ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login
