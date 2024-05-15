
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Registration = () => {

    const { registerUser, setLoading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleFormData = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        const photoURL = form.get("photo")

        if (password.length < 6) {
            swal('Password must have 6 character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            swal('Password must have 1 Upparcase character');
            return;
        } else if (!/[a-z]/.test(password)) {
            swal('Password must have 1 lowercase character');
            return;
        }

        registerUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, { displayName: name, photoURL: photoURL }).then(() => {
                    setLoading(true);
                });
                navigate(location?.state ? location.state : '/');
                swal("Good job!", "Your account create successfully!", "success", {
                    button: "OK",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert.warning(errorMessage)
            });
    }



    return (
        <div>
            <Helmet>
                <title>Meal for Heal | Registration</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
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
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
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