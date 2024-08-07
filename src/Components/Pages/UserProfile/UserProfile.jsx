import { Button, EditIcon } from "evergreen-ui";
import useAuth from "../../../Hook/useAuth";


const UserProfile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }


    return (
        <section className="py-24 text-center  h-[650px] bg-gray-200">
            <h1 className="text-5xl font-extrabold dark:text-gray-900">{user?.displayName}</h1>

            <div>
                <div className="avatar py-10 z-10">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>

                <div className="card bg-white md:w-[600px] pt-16 text-left px-16
                 h-[300px] border-2 
                 absolute left-[29%] bottom-[28%]
                 ">
                    <h2 className="text-xl font-bold">Personal information</h2>
                    <input id="Foodname" type="text" name="Foodname" placeholder={user?.displayName} disabled
                        className="input input-bordered input-xs w-full max-w-xs p-3 mt-2" />
                    <input id="Foodname" type="text" name="Foodname" placeholder={user?.email} disabled
                        className="input input-bordered input-xs w-full max-w-xs p-3 mt-4" /> <br />
                </div>
            </div>

        </section>
    );
};

export default UserProfile;