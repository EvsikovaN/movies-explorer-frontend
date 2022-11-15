import LandingHeader from "../Header/LandingHeader/LandingHeader";
import MainHeader from "../Header/MainHeader/MainHeader";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
  return (
    <>
      {loggedIn ? <MainHeader /> : <LandingHeader />}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
