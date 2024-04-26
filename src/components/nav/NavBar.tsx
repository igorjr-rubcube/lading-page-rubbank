import { useState, useEffect } from 'react';
import LightDarkIcon from './icons/LightDarkIcon';
import RubbankLogo from './icons/RubbankLogo';
import { Button, ContaButton, Hamburguer, LightDarkButton, LogoButton, Menu, MenuBar, Right } from './style.ts';
import HamburgerIcon from './icons/HamburgerIcon.tsx';

function NavBar() {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    const handleWindowResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <MenuBar>
            <LogoButton>
                <RubbankLogo />
            </LogoButton>
            <Right>
                {isMobile ? (
                    <Hamburguer>
                        <HamburgerIcon />
                    </Hamburguer>
                ) : (
                    <Menu>
                        <Button>
                            INÍCIO
                        </Button>
                        <Button>BENEFÍCIOS</Button>
                        <Button>
                            FEEDBACK
                        </Button>
                        <Button>
                            DÚVIDAS
                        </Button>
                        <ContaButton>
                            ABRA SUA CONTA
                        </ContaButton>
                    </Menu>
                )}
            </Right>
            {!isMobile && (
                <LightDarkButton>
                    <LightDarkIcon />
                </LightDarkButton>
            )}
        </MenuBar>
    );
}

export default NavBar;