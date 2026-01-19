import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles.jsx";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterInfo>
            <InfoItem>
              <InfoLabel>CEO</InfoLabel>
              <InfoText>Suby Hyun</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Contact</InfoLabel>
              <InfoText>
                <ContactLink href="mailto:watsuby12@gmail.com">
                  watsuby12@gmail.com
                </ContactLink>
              </InfoText>
            </InfoItem>
          </FooterInfo>
          {/* 인스타그램 링크 추가 */}
          <SocialLinks>
            <SocialLink
              href="https://www.instagram.com/forward__rewind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="currentColor"
                  />
                </svg>
              </InstagramIcon>
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </Container>
      <Copyright>© 2025 FORWARD & REWIND. All Rights Reserved</Copyright>
    </FooterWrapper>
  );
};

export default Footer;

// 스타일 컴포넌트들
const FooterWrapper = styled.footer`
  background-color: var(--color-dark);
  border-top: 1px solid var(--color-medium-gray);
  padding: 2rem 0 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem;
    margin-top: 3rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; /* 추가 */
  align-items: center; /* 추가 */
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서는 세로 배치 */
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0rem;
  }
`;

const InfoLabel = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-secondary);
  min-width: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    min-width: auto;
  }
`;

const InfoText = styled.span`
  font-size: 1.4rem;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactLink = styled.a`
  color: var(--color-primary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

/* 새로 추가되는 스타일 */
const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5rem 0; /* InfoItem의 gap(2rem)과 동일하게 상하 여백 추가 */
  }
`;

const SocialLink = styled.a`
  color: var(--color-primary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-secondary);
    transform: translateY(-2px);
  }
`;

const InstagramIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: var(--color-secondary);
  text-align: center;
  padding-top: 1.5rem;
  margin-top: 2rem;
  border-top: 1px solid var(--color-medium-gray);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-top: 1rem;
    margin-top: 1.5rem;
  }
`;
