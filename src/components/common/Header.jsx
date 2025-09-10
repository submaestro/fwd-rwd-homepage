import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles.jsx";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo href="/">
            <LogoImage
              src="/src/assets/images/icons/fwd_rew_logo.svg"
              alt="FWD&RWD"
            />
          </Logo>

          <Navigation>
            <NavList>
              <NavItem>
                <NavLink href="/work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </Navigation>

          {/* 모바일 햄버거 메뉴 */}
          <MobileMenuButton>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

// 스타일 컴포넌트들
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-dark);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-dark);
  z-index: 1000;
  transition: all 0.3s ease;
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
  margin-top: 50px;
  height: 50px;
  width: auto;

  @media (max-width: 768px) {
    height: 28px;
  }
`;

const Navigation = styled.nav`
  margin-top: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-primary);
  position: relative;
  padding: 2rem 1rem;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
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
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--color-dark);
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &:hover span {
    background-color: var(--color-dark);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// 추후 모바일 메뉴 오픈 시 사용할 스타일
const MobileMenu = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background-color: var(--color-dark);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 999;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
