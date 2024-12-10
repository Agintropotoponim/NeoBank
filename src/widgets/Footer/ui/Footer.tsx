import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CONTENT_FOOTER_LINKS } from '../../../shared/consts/contentFooterLinks'
import { HorizontalRule } from '../../../shared/ui/HorizontalRule'
import { emailAdress, phoneNumber } from '../const/contactData'
import { logo } from '../const/logo'
import { device } from 'shared/config/theme/device'
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const StyledLogoIcon = styled(LogoIcon)`
    max-width: 158.14px;
    max-height: 50px;

    @media ${device.tabletS} {
        width: fit-content;
    }
`;

const FooterHolder = styled.footer`
    width: 100vw;
    background: linear-gradient(0deg, 
        ${({ theme }) => theme.colors.footer.backgroundLight}), 
        ${({ theme }) => theme.colors.footer.backgroundDark};
    display: flex;
    justify-content: center;
    min-height: 462px;
    box-sizing: border-box;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1300px;
`;

const UpperSection = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: fit-content;

    @media ${device.tabletS} {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

const ContactData = styled.p`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media ${device.tabletS} {
        height: fit-content;
    }
`;

const ContactPhone = styled.span`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.4%;
    text-align: center;
    color: ${({ theme }) => theme.colors.textTertiary};
`;

const ContactEmail = styled.span`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.footer.secondary};
`;

const LinksContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    height: fit-content;
    gap: 10px 38px;
    padding: 0;
    margin: 0;

    @media ${device.desktopS} {
        justify-content: center;
    }

    @media ${device.laptopS} {
        justify-content: center;
    }

    @media ${device.tabletS} {
        justify-content: center;
    }
`;

const StyledNavLink = styled(NavLink)`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textTertiary};
    text-decoration: none;
    white-space: nowrap;
`;

const Cookies = styled.section`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.footer.secondary};

    @media ${device.desktopS} {
        text-align: center;
    }

    @media ${device.laptopS} {
        text-align: center;
    }

    @media ${device.tabletS} {
        text-align: center;
        height: fit-content;
    }
`;

export const Footer: React.FC = () => {

    const footerLinksContent = CONTENT_FOOTER_LINKS.map((item) => (
        <li key={item.title}>
            <StyledNavLink
                to={item.link}
                end
            >
                {item.title}
            </StyledNavLink>
        </li>
    ))

    return (
        <FooterHolder>
            <FooterContainer>
                <UpperSection>
                    <StyledLogoIcon />
                    <ContactData>
                        <ContactPhone>
                            {phoneNumber}
                        </ContactPhone>
                        <ContactEmail>
                            {emailAdress}
                        </ContactEmail>
                    </ContactData>
                </UpperSection>
                <LinksContainer>
                    {footerLinksContent}
                </LinksContainer>
                <HorizontalRule />
                <Cookies>
                    We use cookies to personalize our services and improve the user experience of our website.
                    Cookies are small files containing information about previous visits to a website.
                    If you do not want to use cookies, please change your browser settings
                </Cookies>
            </FooterContainer>
        </FooterHolder >
    )
}