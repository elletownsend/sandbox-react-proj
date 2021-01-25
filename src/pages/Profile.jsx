import NavBar from '../components/NavBar'
import ProfileInfo from '../components/ProfileInfo'
import BackBtn from '../components/BackBtn'

export const Profile = (props) => {

    return (
        <>
            <NavBar />
            <BackBtn closeInfo={props.closeInfo} />
            <ProfileInfo data={props.data} />
        </>
    )
}

export default Profile