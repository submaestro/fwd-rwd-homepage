import styled from "styled-components";
import { Container, Section } from "../../styles/GlobalStyles.jsx";

const PortfolioList = ({ isHomePage = false }) => {
  // 임시 포트폴리오 데이터 (실제 이미지로 교체 예정)
  const portfolioData = [
    {
      id: 1,
      title: "slomar",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/slomar_main.jpg",
    },
    {
      id: 2,
      title: "CUORA",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/CUORA_main.jpg",
    },
    {
      id: 3,
      title: "metaphor",
      description: "Brand Design",
      image: "/src/assets/images/portfolio/metaphor_main.jpg",
    },
    {
      id: 4,
      title: "yorogo",
      description: "Brand Design",
      image: "/src/assets/images/portfolio/yorogo_main.jpg",
    },
    {
      id: 5,
      title: "future wise",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/future_wise_main.jpg",
    },
    {
      id: 6,
      title: "oroshi studio",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/oroshi_studio_main.jpg",
    },
    {
      id: 7,
      title: "BIZEN",
      description: "Brand Logo & Package Design",
      image: "/src/assets/images/portfolio/BIZEN_main.jpg",
    },
    {
      id: 8,
      title: "mosigo",
      description: "Brand Design",
      image: "/src/assets/images/portfolio/mosigo_main.jpg",
    },
    {
      id: 9,
      title: "repeato",
      description: "Brand Design",
      image: "/src/assets/images/portfolio/repeato_main.jpg",
    },
    {
      id: 10,
      title: "gajimo",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/gajimo_main.jpg",
    },
    {
      id: 11,
      title: "pik by pet",
      description: "Brand Logo Design",
      image: "/src/assets/images/portfolio/pik_by_pet_main.jpg",
    },
    {
      // id: 12,
      // title: "Project Title 12",
      // description: "Installation, Interactive Media",
      // image: "/src/assets/images/portfolio/portfolio-12.jpg",
    },
  ];

  return (
    <PortfolioSection isHomePage={isHomePage}>
      <Container>
        <PortfolioGrid>
          {portfolioData.map((item) => (
            <PortfolioItem key={item.id}>
              <ImageWrapper>
                <PortfolioImage
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    // 이미지 로드 실패 시 임시 배경색 표시
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#333";
                  }}
                />
              </ImageWrapper>
              <TextContent>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectDescription>{item.description}</ProjectDescription>
              </TextContent>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </Container>
    </PortfolioSection>
  );
};

export default PortfolioList;

// 스타일 컴포넌트들
const PortfolioSection = styled(Section)`
  background-color: var(--color-dark);
  ${(props) =>
    props.isHomePage &&
    `
    padding-top: 0;
  `}
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem; /* row-gap column-gap */

  @media (max-width: 1024px) {
    gap: 3rem 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PortfolioItem = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4/3; /* 가로:세로 = 4:3 비율 */
  overflow: hidden;
  background-color: var(--color-medium-gray);
  margin-bottom: 1.5rem;
  position: relative;
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

const TextContent = styled.div`
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.8rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--color-secondary);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
