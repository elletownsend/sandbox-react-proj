import './styles/Card.css'

import { Link } from 'react-router-dom'

const Card = ({ data, viewInfo }) => {
    const interestsList = data.interests;
    const interests = interestsList.map(item => <span className="interests_item" key={interestsList.indexOf(item)}>{item}</span>);
    return (
        <Link to={`/profile/${data.id}`} onClick={() => viewInfo(data.id)}>
            <div className="card">
                <div className="left">
                    <img className="profile_img" src={data.image} alt="user profile" />
                    <div className="flag_wrapper">
                        <img className="flag" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                    </div>
                </div>
                <div className="right">
                    <h3 className="name">{data.name}</h3>
                    <p className="title">{data.jobTitle}</p>
                    <p className="location">{data.location}</p>
                    <div className="interests">
                        <p className="interests_title">Interests: </p>
                        {interests}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;