import { Link } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import Contact from "./HomeContactFooter";
import HomeFundations from "./HomeFundations";

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
      <section id="fundations"><HomeFundations/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}

/*
HomeHeader
HomeThreeColumns
HomeSimpleSteps
HomeAboutUs
HomeAbout
HomeContactForm
HomeFooter
*/