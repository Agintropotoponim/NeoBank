import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CONTENT_FOOTER_LINKS } from '../../../shared/consts/contentFooterLinks'
import { HorizontalRule } from '../../../shared/ui/HorizontalRule'
import { emailAdress, phoneNumber } from '../const/contactData'
import { logo } from '../const/logo'

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

    @media (max-width: 500px) {
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

    @media (max-width: 500px) {
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

    @media (max-width: 1300px) {
        justify-content: center;
    }

    @media (max-width: 920px) {
        justify-content: center;
    }

    @media (max-width: 500px) {
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

    @media (max-width: 1300px) {
        text-align: center;
    }

    @media (max-width: 920px) {
        text-align: center;
    }

    @media (max-width: 500px) {
        text-align: center;
        height: fit-content;
    }
`;

const Logo = styled.img`
    width: 158.14px;

    @media (max-width: 500px) {
        width: fit-content;
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
                    <Logo src={logo} alt="logo" />
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