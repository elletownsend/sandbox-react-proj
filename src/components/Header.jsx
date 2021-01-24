import styled from 'styled-components'

import search from '../assets/images/search.svg'

const HeaderWrapper = styled.form`
    margin: 96px 156px 64px 156px;
`

const HeaderCopy = styled.p`
    margin: 24px 0 32px 0;
    width: 60%;
`

const SearchWrapper = styled.div`
    margin: 8px 0;
    max-width: 552px;
    display: flex;
`

const SearchBar = styled.input`
    max-height: 72px;
    width: 80%;

    margin-right: 12px;
    padding: 24px;

    border-radius: 16px;
    border: none;

    background-color: #E6E6E6;

    font-family: 'Avenir';
    font-weight: 400;
    font-size: 1rem;  
    line-height: 24px;
    
    color: #222222;
`

const SearchBtn = styled.button`
    min-height: 72px;
    min-width: 72px;

    margin-left: 12px;

    border-radius: 16px;
    border: none;

    background-color: #544EC6;
`

const Header = (props) => {
    return (
        <HeaderWrapper action="" onSubmit={props.handleSubmit}>
            <h1>It's not what you know, it's who.</h1>
            <HeaderCopy>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto pariatur illum quos eligendi voluptate totam!</HeaderCopy>
            <SearchWrapper>
                <SearchBar type="text" name="search" placeholder="Search..." onChange={props.handleChange} />
                <SearchBtn onClick={props.handleSubmit}><img src={search} alt="Search Icon" /></SearchBtn>
            </SearchWrapper>
        </HeaderWrapper>
    );
}

export default Header;