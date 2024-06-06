import styled from "styled-components";

const CtaSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const Title = styled.h2`
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin: 0;
    padding: 0;
`;

const BtnDiv = styled.div`
    display: flex;
    gap: 1rem;
`;

const QrCode = styled.img`
    height: 15rem;
    border-radius: 1.75rem;
    border: none;
    margin: 3rem 0;
`;

const BtnStore = styled.a`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    svg {
    border-radius: 0.8rem;
    }
`;

export { CtaSection, Title, BtnDiv, QrCode, BtnStore };