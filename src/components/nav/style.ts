import styled from 'styled-components';

// TODO - change all units to relative units

const LightDarkButton = styled.a`
    display: flex;
    align-items: center;
    color: #ffffff;
    border-radius: 50%;
    svg {
        width: 2rem;
        height: auto;
    }
    &:hover {
    cursor: pointer;
    transition: color 0.5s;
    color: #d8d8d8;
    }
`;

const Menu = styled.nav`
    background-color: #1D1C3E;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuBar = styled(Menu)`
    padding: 1.5vh 1.5vw;
`;

const LogoButton = styled.a`
    display: flex;
    align-items: center;
    svg {
        width: 15rem;
        height: auto;
    }
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

const Button = styled.a`
    font-size: 18pt;
    height: auto;
    margin: 0 2vw;
    padding: 0;
    background-color: transparent;
    border: none;
    color: #ffffff;
    p {
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    &:hover {
        cursor: pointer;
        color: #d8d8d8;
    }
`;

const ContaButton = styled.button`
    font-size: 18pt;
    background-color: #ffffff;
    border: none;
    border-radius: 1rem;
    color: #1D1C3E;
    padding: 0.5rem 1.5rem;
    p {
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    &:hover {
        background-color: #d8d8d8;
        cursor: pointer;
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 1.5vw;
`;

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

export { LightDarkButton, Menu, MenuBar, LogoButton, Button, ContaButton, Right, Hamburger as Hamburguer };