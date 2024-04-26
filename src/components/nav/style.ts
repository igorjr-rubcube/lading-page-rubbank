import styled from 'styled-components';

const NavSection = styled.nav`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 0;
    margin: 0;
`;

const MenuBar = styled.div`
    background-color: #1D1C3E;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2vh 3vw;
    margin: 0;
`;


const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: 1.5vw;
    margin: 0;
`;

const LogoButton = styled.span`
    display: flex;
    align-items: center;
    svg {
        width: 18vw;
        height: auto;
    }
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

const Links = styled.a`
    font-size: 1.5vw;
    height: auto;
    margin: 0 0;
    padding: 0 2vw;
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
    font-size: 1.5vw;
    background-color: #ffffff;
    border: none;
    border-radius: 1vw;
    color: #1D1C3E;
    padding: 1.1vh 1.3vw;
    margin: 0 2vw 0 0;
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

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5vw;
    background-color: transparent;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

const LightDarkButton = styled.a`
    display: flex;
    align-items: center;
    color: #ffffff;
    border-radius: 50%;
    svg {
        width: 2vw;
        height: auto;
    }
    &:hover {
    cursor: pointer;
    transition: color 0.5s;
    color: #d8d8d8;
    }
`;

export { NavSection, MenuBar, LogoButton, Links, ContaButton, Right, Hamburger, LightDarkButton };