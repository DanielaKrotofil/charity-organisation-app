import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import Contact from "./HomeContactFooter";
import WhoWeHelp from "./HomeWhoWeHelp";
import { Footer } from "./HomeContactFooter";

const Home = () => {
    return (<section className='home'>
        <section id="start" ><HomeHeader/></section>
      <section><HomeThreeColumns/></section>
      <section id="about"><HomeSimpleSteps/></section>
      <section id="aboutus"><HomeAboutUs/></section>
      <section id="fundations" className="whowehelp"><WhoWeHelp/></section>
      <section className="contactFooter" id="contact">
        <Contact/>
        <Footer/>
      </section>
    </section>)
}

export default Home