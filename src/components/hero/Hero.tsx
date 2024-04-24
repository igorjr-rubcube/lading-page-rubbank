import { BtnCTA, HeroSection, High, ImgMan, Title, TitleDiv } from "./style";

function Hero() {
    return (
        <HeroSection>
                <TitleDiv>
                    <Title>
                        O <High>banco digital</High> com <High>tudo</High> que sua vida financeira <High>precisa</High>
                    </Title>
                    <BtnCTA><p>ABRA SUA CONTA</p></BtnCTA>
                </TitleDiv>
                <ImgMan
                    src="/src/assets/man-phone-rubbank.png"
                    alt="Man Holding a Phone with Rubbank App"
                />
        </HeroSection>
    )
}

export default Hero;