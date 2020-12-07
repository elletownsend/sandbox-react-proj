import './styles/Card.css'

const Card = ({ data }) => {
    const interestsList = data.interests;
    const interests = interestsList.map(item => <span className="interests_item" key={interestsList.indexOf(item)}>{item}</span>);
    return (
        <div className="card">
            <div className="left">
                <img className="profile_img" src="https://images.summitmedia-digital.com/cosmo/images/2020/10/23/nam-joo-hyuk-start-up-min-1-1603449918.jpg" alt="user profile" />
                <div className="flag_wrapper">
                    <img className="flag" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png" alt="South Korean Flag" />
                </div>
            </div>
            <div className="right">
                <h2 className="name">{data.name}</h2>
                <p className="title">{data.jobTitle}</p>
                <p className="location">{data.location}</p>
                <div className="interests">
                    <p className="interests_title">Interests: </p>
                    {interests}
                </div>
            </div>
        </div>
    );
}

export default Card;