import styled from "styled-components";

const BeneficiosSection = styled.section`
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
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem;
    margin: 0;
`;

const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const Card = styled.div`
    width: 18rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0;
    background-color: #1d1c3e;
    border-radius: 1.5rem;
    border: 0.3rem solid #FFFFFF;
`;

const CardTitle = styled.h3`
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem;
    margin: 0;
`;

const CardIcon = styled.span`
    display: flex;
    align-items: center;
    color: #ffffff;
    svg {
        height: 10rem;
        width: auto;
    }
`;

export { BeneficiosSection, Title, CardDiv, Card, CardTitle, CardIcon };
