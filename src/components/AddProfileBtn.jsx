import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import user from '../assets/images/user-plus.svg'

const AddBtn = styled.button`
    height: 72px;
    width: 72px;

    background-color: #544EC6;

    border-radius: 100%;
    border: none;

    float: right;
    margin-bottom: 24px;
    margin-right: 156px;

    position: fixed;
    z-index: 99;
    bottom: 24px;
    right: 0px;

    cursor: pointer;

    box-shadow: 0px 0px 10px rgba(84,78,198,0.75);
`

const AddProfileBtn = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/add");
    }

    return (
        <form onSubmit={handleClick}>
            <AddBtn type="submit">
                <img src={user} alt="Add Profile" />
            </AddBtn>
        </form>
    )
}

export default AddProfileBtn;
