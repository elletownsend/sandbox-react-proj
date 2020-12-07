import NavBar from '../components/NavBar'
import ProfileInfo from '../components/ProfileInfo'

export const Profile = () => {
    const data = [
        {
            "id": "001",
            "name": "Nam Do-san",
            "jobTitle": "Developer",
            "location": "Seoul, South Korea",
            "interests": ["A.I.", "Technology", "Coding", "Python"],
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo libero perferendis placeat ex voluptas quaerat blanditiis sit tempora qui sed omnis expedita ad alias velit, aliquam error quisquam illo, voluptatem dolor explicabo odit veritatis. Fugit quo quam necessitatibus possimus.",
            "website": "domountain.kr"
        }
    ];

    return (
        <>
            <NavBar />
            <ProfileInfo data={data[0]} />
        </>
    )
}

export default Profile