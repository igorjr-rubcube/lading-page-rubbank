import styled from "styled-components";

const FooterSection = styled.footer`
    border-top: 0.1vh solid #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: space-around;
    background-color: #1D1C3E;
    margin: 0;
    padding: 2rem 4rem;
    text-align: center;
`;

const Container = styled.div<{align?: string}>`
    display: flex;
    justify-content: center;
    align-items: ${props => props.align || "center"};
    margin: 0;
    padding: 0;
`;

const FooterText = styled.p`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 300;
    margin: 0.5rem 0;
`;

const Column = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0  0 0 5rem;
    padding: 0;
`;

const ColumnTitle = styled.h3`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`;

const ColumnLink = styled.a`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 300;
    margin: 0.2rem 0;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Logo = styled.a`
    color: #ffffff;
    width: 25rem;
`;

const SocialMediaIcon = styled.a`
    color: #ffffff;
    margin: 0 1rem 0 0;
    svg {
        width: 2.5rem;
        margin: 0;
    }
`;

export { FooterSection, Container, FooterText, Column, ColumnTitle, ColumnLink, Logo, SocialMediaIcon};