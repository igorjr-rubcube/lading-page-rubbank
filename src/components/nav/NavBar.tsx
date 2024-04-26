import { useState, useEffect } from 'react';
import LightDarkIcon from './icons/LightDarkIcon';
import RubbankLogo from './icons/RubbankLogo';
import { Links, ContaButton, Hamburger, LightDarkButton, LogoButton, MenuBar, NavSection, Right } from './style.ts';
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

    const handleLinkTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <NavSection>
            <MenuBar>
                <LogoButton>
                    <RubbankLogo />
                </LogoButton>
                <Right>
                    {isMobile ? (
                        <Hamburger>
                            <HamburgerIcon />
                        </Hamburger>
                    ) : (
                        <>
                            <Links onClick={() => handleLinkTo('hero')}>
                                INÍCIO
                            </Links>
                            <Links onClick={() => handleLinkTo('beneficios')}>
                                BENEFÍCIOS
                            </Links>
                            <Links onClick={() => handleLinkTo('feedback')}>
                                FEEDBACK
                            </Links>
                            <Links onClick={() => handleLinkTo('faq')}>
                                DÚVIDAS
                            </Links>
                            <ContaButton onClick={() => handleLinkTo('cta')}>
                                ABRA SUA CONTA
                            </ContaButton>
                            <LightDarkButton>
                                <LightDarkIcon />
                            </LightDarkButton>
                        </>
                    )}
                </Right>
            </MenuBar>
        </NavSection>
    );
}

export default NavBar;