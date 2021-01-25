import back from '../assets/images/back.svg'

import { Link } from 'react-router-dom'

const BackBtn = (props) => {
    return (
        <span className="back">
            <Link to="/" onClick={props.closeInfo}>
                <img src={back} alt="back arrow" /> back
                </Link>
        </span>
    )
}

export default BackBtn;
