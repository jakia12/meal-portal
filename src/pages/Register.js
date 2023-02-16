import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthState } from '../context/Context';

const Register = () => {
    const { createUser, verifyEmail, updateUserProfile } = AuthState();

    //chceck the error
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const target = e.target;
        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;

        createUser(name, email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                setError('');

                handleEmailVerification();
                alert('Please; verify email address');
                handleUpdateProfile(name);
                target.reset();



            })
            .catch((err) => {
                console.error(err);
                setError(err.messege);
            })
    }

    //handle user profile updating
    const handleUpdateProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => {

            }).catch((err) => {
                console.log(err);
            })
    }
    //email verfification
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {

            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className='registration_section px-16 py-20'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} action="">
                            <div className="card-body">
                                <p>{error}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to="/" className="label-text-alt link link-hover">Have an account ? Login here</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
