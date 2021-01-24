import styled from 'styled-components'

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

    position: -webkit-sticky; /* Safari */
    position: sticky;
    bottom: 24px;

    box-shadow: 0px 0px 10px rgba(84,78,198,0.75);
`

const AddProfileBtn = () => {
    return (
        <AddBtn>
            <img src={user} alt="Add Profile" />
        </AddBtn>
    )
}

export default AddProfileBtn;
