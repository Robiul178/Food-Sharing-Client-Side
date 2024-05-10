
import useAuth from "../../../Hook/useAuth";

import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const { food } = useAuth();
    const { id } = useParams();
    // const intId = parseInt(id);
    // console.log('int id ', id, typeof (id))
    const filterFood = food.find(f => f._id === id)
    // const filterFood = food?.find(f => f._id === intId);
    console.log(filterFood)


    return (
        <div>
            <h2>ViewDetails:{food?.length} </h2>
        </div>
    );
};

export default ViewDetails;