import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    
    width: 380px;
    min-height: 192px;

    margin: 20px;

    padding: 24px;

    background-color: #fff;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	border-radius: 20px;

	transition: all 0.5s ease;
`

const ImgFlagWrapper = styled.div`
    margin-right: 8px;
`

const CardImg = styled.img`
    width: 80px;
	height: 80px;

	object-fit: cover;
	object-position: 50% 50%;

	border-radius: 100%;
`

const FlagWrapper = styled.div`
	width: 25px;
	height: 25px;
	background-color: #f2f2f2;
	border-radius: 100%;
	position: relative;
	top: -30px;
	left: 55px;
`

const Flag = styled.img`
	width: 15px;
	height: 15px;
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto auto;
`

const CardInfoWrapper = styled.div`
    margin-left: 8px;
`

const Interests = styled.div`
    margin-top: 8px;
`

const InterestsTitle = styled.p`
    margin-bottom: 8px;
`

const Card = ({ data, viewInfo }) => {
    const interestsList = data.interests;
    const interests = interestsList.map(item => <span className="tag" key={interestsList.indexOf(item)}>{item}</span>);
    return (
        <Link to={`/profile/${data.id}`} onClick={() => viewInfo(data.id)}>
            <CardWrapper>
                <ImgFlagWrapper>
                    <CardImg src={data.image} alt="user profile" />
                    <FlagWrapper>
                        <Flag src={data.flag} alt={`${data.location} flag emoji`} />
                    </FlagWrapper>
                </ImgFlagWrapper>
                <CardInfoWrapper>
                    <h3>{data.name}</h3>
                    <h4>{data.jobTitle}</h4>
                    <h4>{data.location}</h4>
                    <Interests>
                        <InterestsTitle>Interests: </InterestsTitle>
                        {interests}
                    </Interests>
                </CardInfoWrapper>
            </CardWrapper>
        </Link>
    );
}

export default Card;