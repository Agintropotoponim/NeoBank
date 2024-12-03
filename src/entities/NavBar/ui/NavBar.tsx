import { NavLink } from "react-router-dom";
import { CONTENT_NAVIGATION_MENU } from "shared/consts/contentNavMenu";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex-wrap: wrap;
    width: 437px;

    @media (max-width: 920px) {
        width: 100%;
    }

     @media (max-width: 500px) {
        flex-wrap: wrap;
        width: 90%;
        gap: 20px;
        font-size: 20px;
    }
`;

const NavItem = styled.li`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.navbarItem};
    text-decoration: none;
    transition: 0.3s;

    &:hover {
    color: ${({ theme }) => theme.colors.navbarActive};
    }
`;

const StyledNavLink = styled(NavLink)`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.navbarItem};
    text-decoration: none;
    transition: 0.3s;

    &.active {
    color: ${({ theme }) => theme.colors.navbarActive};
    }

    &:hover {
    color: ${({ theme }) => theme.colors.navbarActive};
    }
`;

export const NavBar: React.FC = () => {
    const navigationContent = CONTENT_NAVIGATION_MENU.map((item) => (
        <NavItem key={item.title}>
            <StyledNavLink
                to={item.link}
                end

                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                {item.title}
            </StyledNavLink>
        </NavItem>
    ));

    return (
        <Nav>
            {navigationContent}
        </Nav>
    );
};