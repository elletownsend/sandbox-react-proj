import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/images/SANDBOX.svg'
import menu from '../assets/images/menu.svg'
import search from '../assets/images/search.svg'
import toggle from '../assets/images/moon.svg'

const Nav = styled.nav`
    height: 80px;
    width: 100%;
    background-color: #544EC6;

    border-radius: 0 0 24px 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.img`
    padding: 24px;
`

const NavIcons = styled.ul`
    display: flex;
    list-style: none;
    padding: 24px;
    margin: 0;
`

const Icon = styled.li`
    cursor: pointer;
    
    :not(:last-child) {
        padding-right: 48px;
    }
`

const NavBar = () => {
    return (
        <BrowserRouter>
            <Nav>
                <logo>
                    <Img src={logo} alt="Sandbox Logo" />
                </logo>

                <NavIcons>
                    <Icon>
                        <img src={search} alt="Search Icon" />
                    </Icon>
                    <Icon>
                        <img src={menu} alt="Menu Icon" />
                    </Icon>
                    <Icon>
                        <img src={toggle} alt="Dark Mode Toggle Icon" />
                    </Icon>
                </NavIcons>
            </Nav>
        </BrowserRouter>
    );
}

export default NavBar;