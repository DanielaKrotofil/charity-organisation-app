import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="navigation">
      <header className="nav container">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link
                className="startlink"
                activeClass="active"
                smooth
                spy
                to="start"
                onClick={() => scrollToSection('start')}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="about"
                onClick={() => scrollToSection('about')}
              >
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="aboutus"
                onClick={() => scrollToSection('aboutus')}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="fundations"
                onClick={() => scrollToSection('fundations')}
              >
                Fundacje i organizacje
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to="contact"
                onClick={() => scrollToSection('contact')}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
