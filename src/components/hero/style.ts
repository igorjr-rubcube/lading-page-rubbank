import styled from "styled-components"

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 0;
  margin: 0;
`;

const HeroSection = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0  4.5rem;
  margin: 4.7rem 0 0 0;
  border-bottom: 1px solid #6b7ae5;
`;

const ImgMan = styled.img<{ src: string, alt: string}>`
  padding: 0;
  margin: 0;
  height: auto;
  width: 45vw;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  color: #ffffff;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const High = styled.span`
  color: #6b7ae5;
  stroke: #ffffff;
  text-shadow: -0.125rem 0.125rem 0 #1d1c3e;
`;


const BtnCTA = styled.button`
  width: 24rem;
  height: 5rem;
  margin-top: 8rem;
  background-color: #ffffff;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: 0 0.3rem 1.5rem 0.00rem #1d1c3e;
  p {
    color: #1d1c3e;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s;
    background-color: #d8d8d8;
  }
`;

export { Title, High, TitleDiv, ImgMan, HeroSection, BtnCTA }