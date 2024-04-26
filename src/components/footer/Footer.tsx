import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import RubbankLogo from "./icons/RubbankLogo";
import { Column, ColumnLink, ColumnTitle, Container, FooterSection, FooterText, Logo, SocialMediaIcon } from "./style";

const linkInstagram = "https://www.instagram.com";
const linkLinkedin = "https://br.linkedin.com";
const linkPrivacyPolicy = "https://www.rubbank.com.br";
const linkTermsOfUse = "https://www.rubbank.com.br";
const email = "suporte.rubbank.igorj@gmail.com";
const phone = "+55 (18) 99141-7288";


function Footer({id} : {readonly id: string}) {
    return (
        <FooterSection id={id}>
            <Container align="left">
                <Logo>
                    <RubbankLogo />
                    <FooterText>
                        ® 2024 Rubbank S.A.
                        <br />
                        Presidente Prudente - SP
                    </FooterText>
                    <SocialMediaIcon href={linkLinkedin}>
                        <LinkedinIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={linkInstagram}>
                        <InstagramIcon />
                    </SocialMediaIcon>
                </Logo>
            </Container>
            <Container align="flex-start">
                <Column>
                    <ColumnTitle>FALE CONOSCO</ColumnTitle>
                    <ColumnLink href={"mailto:" + email}>{email}</ColumnLink>
                    <ColumnLink href={"tel:+" + phone.replace(/[^\d]/g, "")}>{phone}</ColumnLink>
                </Column>
                <Column>
                    <ColumnTitle>TRANSPARÊNCIA</ColumnTitle>
                    <ColumnLink href={linkPrivacyPolicy}>POLÍTICA DE PRIVACIDADE</ColumnLink>
                    <ColumnLink href={linkTermsOfUse}>TERMOS DE USO</ColumnLink>
                </Column>
                <Column>
                    <ColumnTitle>LINKS RÁPIDOS</ColumnTitle>
                    <ColumnLink>INÍCIO</ColumnLink>
                    <ColumnLink>BENEFÍCIOS</ColumnLink>
                    <ColumnLink>FEEDBACK</ColumnLink>
                    <ColumnLink>DÚVIDAS</ColumnLink>
                </Column>
            </Container>
        </FooterSection>
    );
}

export default Footer;