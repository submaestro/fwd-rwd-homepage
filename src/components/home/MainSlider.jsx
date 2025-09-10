import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles.jsx";

const MainSlider = () => {
  return (
    <SliderWrapper>
      <Container>
        <SliderContent>
          <CopyText>
            FORWARD &<br />
            REWIND
          </CopyText>
        </SliderContent>
      </Container>
    </SliderWrapper>
  );
};

export default MainSlider;

// 스타일 컴포넌트들
const SliderWrapper = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark);
  padding: var(--header-height) 0 0;
`;

const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
`;

const CopyText = styled.h1`
  width: 680px;
  height: 330px;
  padding: 30px 0;
  font-family: "SUITE Variable", sans-serif;
  font-weight: 800; /* Extra Bold */
  font-size: 6rem;
  line-height: 1.1;
  color: var(--color-primary);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 680px;
    font-size: 4rem;
    height: auto;
    min-height: 280px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    min-height: 220px;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    min-height: 180px;
    padding: 15px 0;
  }
`;
