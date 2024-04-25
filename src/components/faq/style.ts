import styled from "styled-components";

const FaqSection = styled.section`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #ffffff;
    margin: 0 0 2rem 0;
    padding: 0;
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0 0 2rem 0;
    padding: 0;
`;

const High = styled.span`
  color: #6b7ae5;
  stroke: #ffffff;
  text-shadow: -0.125rem 0.125rem 0 #1d1c3e;
`;

const FaqDropdown = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    margin: 0;
    padding: 0;
`;

const FaqDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ffffff;
    padding: 1rem 0;
    margin: 0;
`;

const FaqQuesion = styled.h3`
    font-size: 1.2rem;
    color: #ffffff;
    margin: 0;
    padding: 0;
`;

const FaqAnswer = styled.p`
    font-size: 1rem;
    color: #ffffff;
    margin: 0;
    padding: 0 0 1rem 0;
`;

const BtnOpen = styled.a`
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-size: 1rem;
    svg {
        width: 1rem;
    }
    transition: 0.3s;
    &:hover {
        color: #d8d8d8;
    }
`;

export { FaqSection, Title, SubTitle, High, FaqDropdown, FaqDiv, FaqQuesion, FaqAnswer, BtnOpen };