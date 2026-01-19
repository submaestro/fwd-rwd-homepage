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
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
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
