import styled from "styled-components";
import { Container, Section } from "../../styles/GlobalStyles.jsx";

// 이미지들 import
import slomarImage from "../../assets/images/portfolio/slomar_main.jpg";
import cuoraImage from "../../assets/images/portfolio/CUORA_main.jpg";
import metaphorImage from "../../assets/images/portfolio/metaphor_main.jpg";
import yorogoImage from "../../assets/images/portfolio/yorogo_main.jpg";
import futureWiseImage from "../../assets/images/portfolio/future_wise_main.jpg";
import oroshiStudioImage from "../../assets/images/portfolio/oroshi_studio_main.jpg";
import bizenImage from "../../assets/images/portfolio/BIZEN_main.jpg";
import mosigoImage from "../../assets/images/portfolio/mosigo_main.jpg";
import repeatoImage from "../../assets/images/portfolio/repeato_main.jpg";
import gajimoImage from "../../assets/images/portfolio/gajimo_main.jpg";
import pikByPetImage from "../../assets/images/portfolio/pik_by_pet_main.jpg";

const PortfolioList = () => {
  // 포트폴리오 데이터 - import한 이미지 사용
  const portfolioData = [
    {
      id: 1,
      title: "slomar",
      description: "Brand Logo Design",
      image: slomarImage,
    },
    {
      id: 2,
      title: "CUORA",
      description: "Brand Logo Design",
      image: cuoraImage,
    },
    {
      id: 3,
      title: "metaphor",
      description: "Brand Design",
      image: metaphorImage,
    },
    {
      id: 4,
      title: "yorogo",
      description: "Brand Design",
      image: yorogoImage,
    },
    {
      id: 5,
      title: "future wise",
      description: "Brand Logo Design",
      image: futureWiseImage,
    },
    {
      id: 6,
      title: "oroshi studio",
      description: "Brand Logo Design",
      image: oroshiStudioImage,
    },
    {
      id: 7,
      title: "BIZEN",
      description: "Brand Logo & Package Design",
      image: bizenImage,
    },
    {
      id: 8,
      title: "mosigo",
      description: "Brand Design",
      image: mosigoImage,
    },
    {
      id: 9,
      title: "repeato",
      description: "Brand Design",
      image: repeatoImage,
    },
    {
      id: 10,
      title: "gajimo",
      description: "Brand Logo Design",
      image: gajimoImage,
    },
    {
      id: 11,
      title: "pik by pet",
      description: "Brand Logo Design",
      image: pikByPetImage,
    },
    {
      // id: 12,
      // title: "Project Title 12",
      // description: "Installation, Interactive Media",
      // image: "/src/assets/images/portfolio/portfolio-12.jpg",
    },
  ];

  return (
    <Section>
      <Container>
        <PortfolioGrid>
          {portfolioData.map((item) => (
            <PortfolioItem key={item.id}>
              <ImageWrapper>
                <PortfolioImage src={item.image} alt={item.title} />
              </ImageWrapper>
              <PortfolioInfo>
                <PortfolioTitle>{item.title}</PortfolioTitle>
                <PortfolioDescription>{item.description}</PortfolioDescription>
              </PortfolioInfo>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </Container>
    </Section>
  );
};

// Styled Components
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const PortfolioItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 4/3;
  overflow: hidden;
  margin-bottom: 15px;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PortfolioItem}:hover & {
    transform: scale(1.05);
  }
`;

const PortfolioInfo = styled.div`
  text-align: left;
`;

const PortfolioTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const PortfolioDescription = styled.p`
  color: #ccc;
  font-size: 14px;
  margin: 0;
`;

export default PortfolioList;
