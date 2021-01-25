import AddProfileForm from '../components/AddProfileForm'
import NavBar from '../components/NavBar'
import BackBtn from '../components/BackBtn'

import { useHistory } from "react-router-dom";

const AddProfile = () => {
    let history = useHistory();
    const closeInfo = () => {
        history.push("/");
    }

    return (
        <>
            <NavBar />
            <BackBtn closeInfo={closeInfo} />
            <AddProfileForm />
        </>
    )
}

export default AddProfile;