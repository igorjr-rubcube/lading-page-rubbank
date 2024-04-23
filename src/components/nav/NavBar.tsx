import LightDarkIcon from './icons/LightDarkIcon';
import RubbankLogo from './icons/RubbankLogo';
import { Button, ContaButton, LightDarkButton, LogoButton, Menu, MenuBar, Right } from './style.ts';

function NavBar() {
    return (
        <MenuBar>
            <LogoButton>
                <RubbankLogo />
            </LogoButton>
            <Right>
                <Menu>
                    <Button><p>INÍCIO</p></Button>
                    <Button>BENEFÍCIOS</Button>
                    <Button><p>FEEDBACK</p></Button>
                    <Button><p>DÚVIDAS</p></Button>
                    <ContaButton><p>ABRIR CONTA</p></ContaButton>
                </Menu>
            </Right>
            <LightDarkButton>
                <LightDarkIcon />
            </LightDarkButton>
        </MenuBar>
    );
}

export default NavBar;