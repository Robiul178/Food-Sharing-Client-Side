
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import swal from 'sweetalert';

const Registration = () => {

    const { registerUser } = useAuth()


    const handleFormData = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")

        // const userInfo = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        // console.log(userInfo)

        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    swal("Good job!", "Your account create successfully!", "success", {
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
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> <h2>Registration</h2></h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleFormData}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                                <label className="label">
                                    <Link to="/login">If you already have an account !
                                        <p className="text-blue-600 underline">Please login here</p>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;