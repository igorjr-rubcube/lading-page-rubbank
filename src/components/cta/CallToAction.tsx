import AppStoreIcon from "./icons/AppStoreIcon";
import GooglePlayIcon from "./icons/GooglePlayIcon";
import { BtnDiv, BtnStore, CtaSection, QrCode, Title } from "./style";

function CallToAction({id} : {readonly id: string}) {
    return (
        <CtaSection id={id}>
            <Title>Baixe já o app e abra sua conta</Title>
                <QrCode src="/src/assets/qr.svg" alt="Código QR para acessar a sua loja de aplicativos e baixar o app Rubbank"/>
                <BtnDiv>
                    <BtnStore href="https://www.apple.com/br/app-store/" target="_blank">
                        <AppStoreIcon background={"#1D1C3E"} text={"#ffffff"} logo={"#ffffff"}/>
                    </BtnStore>
                    <BtnStore href="https://play.google.com/store/apps/" target="_blank">
                        <GooglePlayIcon background={"#1D1C3E"} text={"#ffffff"} />
                    </BtnStore>
                </BtnDiv>
        </CtaSection>
    );
}

export default CallToAction;