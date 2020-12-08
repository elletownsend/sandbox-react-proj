import NavBar from '../components/NavBar'
import ProfileInfo from '../components/ProfileInfo'

export const Profile = (props) => {

    return (
        <>
            <NavBar />
            <ProfileInfo data={props.data} closeInfo={props.closeInfo} />
        </>
    )
}

export default Profile