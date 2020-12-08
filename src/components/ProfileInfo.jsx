import back from '../assets/images/back.svg'
import './styles/ProfileInfo.css'

import { Link } from 'react-router-dom'

export const ProfileInfo = (props) => {
    const interestsList = props.data.interests;
    const interests = interestsList.map(item => <span className="interests_item" key={interestsList.indexOf(item)}>{item}</span>);

    return (
        <>
            <span className="back">
                <Link to="/" onClick={props.closeInfo}>
                    <img src={back} alt="back arrow" /> back
                </Link>
            </span>

            <div className="profile_wrapper">
                <div className="profileImg_section">
                    <img className="profileImg-LG" src={props.data.image} alt="Profile" />
                    <div className="flag_wrapper-LG">
                        <img className="flag-LG" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                    </div>
                </div>

                <div className="profileDesc_section">
                    <h2>{props.data.name}</h2>
                    <h3 className="jobTitle">{props.data.jobTitle}</h3>
                    <p className="description">{props.data.description}</p>
                    <div className="interests">
                        {interests}
                    </div>
                </div>
            </div>

            <div className="info">
                <ul>
                    <li>
                        <div className="linkImg_wrapper">
                            <img className="linkImg" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/round-pushpin_1f4cd.png" alt="pushpin" />
                        </div>
                        <p>{props.data.location}</p>
                    </li>
                    <li>
                        <div className="linkImg_wrapper">
                            <img className="linkImg" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png" alt="globe" />
                        </div>
                        <p>{props.data.website}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProfileInfo;