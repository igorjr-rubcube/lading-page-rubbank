import styled from "styled-components"

const HeroSection = styled.header`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh 0 0  0;
  box-sizing: border-box;
  scroll-margin-top: 10vh;
  margin: 0 0 0 0;
  border-bottom: 1px solid #6b7ae5;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0;
  margin: 0;
  max-width: 40%;
  height: 100%;
`;

const ImgMan = styled.img<{ src: string, alt: string}>`
  padding: 0;
  margin: 0;
  height: 100%;
  width: auto;
`;

const Title = styled.h1`
  font-size: 8vh;
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
  width: 28vw;
  height: 10vh;
  margin-top: 10vw;
  background-color: #ffffff;
  border: none;
  border-radius: 3vh;
  cursor: pointer;
  box-shadow: 0 0.3rem 1.5rem 0.00rem #1d1c3e;
  p {
    color: #1d1c3e;
    font-size: 2.3vw;
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