import { Link } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import Contact from "./HomeContactFooter";
import WhoWeHelp from "./HomeWhoWeHelp";
import { Footer } from "./HomeContactFooter";

export default function Navigation() {
  return (
    <div className="navigation">
      <header className="nav container">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link className="startlink" activeClass="active" smooth spy to="start">
                Start
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="aboutus">
                O nas
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="fundations">
                Fundacje i organizacje
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="start" ><HomeHeader/></section>
      <section><HomeThreeColumns/></section>
      <section id="about"><HomeSimpleSteps/></section>
      <section id="aboutus"><HomeAboutUs/></section>
      <section id="fundations" className="whowehelp"><WhoWeHelp/></section>
      <section className="contactFooter" id="contact">
        <Contact/>
        <Footer/>
      </section>
    </div>
  );
}