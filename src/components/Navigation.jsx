import { Link } from "react-scroll";


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
      
    </div>
  );
}