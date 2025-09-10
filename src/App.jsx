import Header from "./components/common/Header.jsx";
import MainSlider from "./components/home/MainSlider.jsx";
import PortfolioList from "./components/work/PortfolioList.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MainSlider />
      <PortfolioList isHomePage={true} />
      <Footer />
    </>
  );
}

export default App;
