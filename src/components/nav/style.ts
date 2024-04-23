import styled from 'styled-components';

const LightDarkButton = styled.a`
    display: flex;
    align-items: center;
    color: #ffffff;
    svg {
        width: 2rem;
        height: auto;
    }
    &:hover {
        cursor: pointer;
        color: #d8d8d8;
    }
`;

const Menu = styled.div`
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
    background-color: transparent;
    border: none;
    color: #ffffff;
    margin: 0 2vw;
    padding: 0;
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

export { LightDarkButton, Menu, MenuBar, LogoButton, Button, ContaButton, Right };