import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/sunn-us/SUITE/fonts/variable/woff2/SUITE-Variable.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
    scrollbar-gutter: stable;
    scroll-behavior: smooth;
  }
  
  body {
    min-height: 100vh;
    font-family: 'SUITE Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #fff;
    background-color: #000;
    overflow-x: hidden;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
  }

  /* LONG&SHORT 스타일 참고한 CSS 변수들 (다크 테마) */
  :root {
    --color-primary: #fff;
    --color-secondary: #999;
    --color-light-gray: #1a1a1a;
    --color-medium-gray: #333;
    --color-dark: #000;
    --color-white: #fff;
    --max-width: 1400px;
    --header-height: 100px;
    --section-padding: 80px 0;
    --mobile-section-padding: 60px 0;
  }

  /* 미디어 쿼리 브레이크포인트 */
  @media (max-width: 1200px) {
    :root {
      --max-width: 1024px;
    }
  }

  @media (max-width: 768px) {
    :root {
      --header-height: 60px;
      --section-padding: 60px 0;
      --mobile-section-padding: 40px 0;
    }
    
    html, body {
      font-size: 14px;
    }
  }
`;

// 공통 컨테이너 컴포넌트
export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

// 섹션 공통 스타일
export const Section = styled.section`
  padding: var(--section-padding);

  @media (max-width: 768px) {
    padding: var(--mobile-section-padding);
  }
`;

// 타이틀 공통 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
