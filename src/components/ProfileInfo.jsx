import back from '../assets/images/back.svg'
import './styles/ProfileInfo.css'

import { Link } from 'react-router-dom'

export const ProfileInfo = ({ data }) => {
    const interestsList = data.interests;
    const interests = interestsList.map(item => <span className="interests_item" key={interestsList.indexOf(item)}>{item}</span>);

    return (
        <>
            <span className="back">
                <Link to="/">
                    <img src={back} alt="back arrow" /> back
                </Link>
            </span>

            <div className="profile_wrapper">
                <div className="profileImg_section">
                    <img className="profileImg-LG" src="https://images.summitmedia-digital.com/cosmo/images/2020/10/23/nam-joo-hyuk-start-up-min-1-1603449918.jpg" alt="Profile" />
                    <div className="flag_wrapper-LG">
                        <img className="flag-LG" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                    </div>
                </div>

                <div className="profileDesc_section">
                    <h2>{data.name}</h2>
                    <h3 className="jobTitle">{data.jobTitle}</h3>
                    <p className="description">{data.description}</p>
                    <div class="interests">
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
                        <p>Seoul, South Korea</p>
                    </li>
                    <li>
                        <div className="linkImg_wrapper">
                            <img className="linkImg" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/speaking-head_1f5e3-fe0f.png" alt="speaking" />
                        </div>
                        <p>Korean, English</p>
                    </li>
                    <li>
                        <div className="linkImg_wrapper">
                            <img className="linkImg" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png" alt="globe" />
                        </div>
                        <p>sandbox.kr/samsantech</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProfileInfo;