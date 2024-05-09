// import React from 'react';

import swal from "sweetalert";
import useAuth from "../../../Hook/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
    const { loginUser } = useAuth()

    const handleFormData = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    swal("Good job!", "You log in successfully!", "success", {
                        button: "Let's see some product!",
                    });
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert.warning(errorMessage)
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormData} className="card-body">
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
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">If you don't have an account !
                                    <Link to="/registrstion">
                                        <p className="text-blue-600 underline">Please register here</p>
                                    </Link>
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;