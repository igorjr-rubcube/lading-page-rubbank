import styled from "styled-components";

const FeedbackSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 5vw;
    font-weight: 400;
    text-align: center;
    padding: 1vw;
    margin: 0;
`;

const CardDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const Card = styled.div`
    width: 25vw;
    height: 26vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5vw 0 1vw;
    padding: 1vw;
    background-color: #1d1c3e;
    border-radius: 0.75vw;
    border: 0.3vw solid #FFFFFF;
`;

const Columns = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const CardColumnLeft = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const CardImg = styled.img`
    max-width: 7vw;
    max-height: 7vw;
    width: auto;
    height: auto;
    border-radius: 50%;
    border: 0.2vw solid #FFFFFF;
`;

const CardName = styled.h3`
    color: #FFFFFF;
    font-size: 1.4vw;
    font-weight: 400;
    text-align: center;
    padding: 1vw;
    margin: 0;
`;

const CardRole = styled.h4`
    color: #FFFFFF;
    font-size: 1.2vw;
    font-weight: 400;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const CardColumnRight = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: space-around;
    margin: 0;
    padding: 0;
`;

const Column = styled.div<{ align?: string }>`
    display: flex;
    margin: 0;
    padding: 0;
    div {
        display: flex;
        justify-content: center;
        align-items: ${props => props.align};
    }
`;

const Quote = styled.div`
    height: 100%;
    margin: 0;
    padding: 0 0.5rem;
    svg {
        color: #FFFFFF;
        width: 1rem;
    }
`;

const CardContent = styled.p`
    display: flex;
    color: #FFFFFF;
    font-size: 1.8rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
`;


export { FeedbackSection, Title, CardDiv, Card, Columns, CardColumnLeft, CardColumnRight, Column, CardName, CardRole, CardContent, CardImg, Quote };