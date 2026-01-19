import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles.jsx";
import logoImage from "../../assets/images/icons/fwd_rew_logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 스크롤 이동 함수
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderContent>
            <Logo href="/" onClick={closeMenu}>
              <LogoImage src={logoImage} alt="FWD&RWD" />
            </Logo>

            <Navigation>
              <NavList>
                <NavItem>
                  <NavButton
                    type="button"
                    onClick={() => handleScrollToSection("portfolio")}
                  >
                    Work
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
              </NavList>
            </Navigation>

            <MobileMenuButton
              onClick={toggleMenu}
              className={isMenuOpen ? "open" : ""}
            >
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
          </HeaderContent>
        </Container>
      </HeaderWrapper>

      <MobileMenu className={isMenuOpen ? "open" : ""}>
        <MobileNavList>
          <MobileNavItem>
            <MobileNavButton
              type="button"
              onClick={() => handleScrollToSection("portfolio")}
            >
              Work
            </MobileNavButton>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="/about" onClick={closeMenu}>
              About
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink href="/contact" onClick={closeMenu}>
              Contact
            </MobileNavLink>
          </MobileNavItem>
        </MobileNavList>
      </MobileMenu>
    </>
  );
};

export default Header;

// 스타일 컴포넌트들
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 2rem 0; // 상하 여백 추가

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  z-index: 1001;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Navigation = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const navLinkStyles = `
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--color-primary);
  position: relative;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  height: auto;
  vertical-align: middle;
  font-family: inherit;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &.active {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavLink = styled.a`
  ${navLinkStyles}
`;

const NavButton = styled.button`
  ${navLinkStyles}
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--color-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  /* 햄버거 메뉴 X 모양 애니메이션 */
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-dark);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
  padding-top: 120px;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 2rem;
`;

const MobileNavItem = styled.li`
  border-bottom: 1px solid var(--color-medium-gray);
`;

const mobileNavLinkStyles = `
  display: block;
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--color-primary);
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;

  &:hover {
    color: var(--color-secondary);
    padding-left: 1rem;
  }
`;

const MobileNavLink = styled.a`
  ${mobileNavLinkStyles}
`;

const MobileNavButton = styled.button`
  ${mobileNavLinkStyles}
`;
