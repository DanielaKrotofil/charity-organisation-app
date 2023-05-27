import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const RegisterForm = () => {
    return (<>
    <header className="nav container">
        <nav className="nav__container__actions nav-loginForm">
          <ul>
            <li>
              <Link to='/' >
                Start
              </Link>
            </li>
            <li>
              <Link to='/'>
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link to='/'>
                O nas
              </Link>
            </li>
            <li>
              <Link to='/'>
                Fundacje i organizacje
              </Link>
            </li>
            <li>
              <Link to='/'>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
    </header>
    <section className='LoginForm '>
        <h2>Zarejestruj się</h2>
        <img className='decoration-line' src={decorationline} alt="line"/>
        <span className='LoginForm__main registration'>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="password">Hasło</label>
            <input type="password"/>

            <label htmlFor="password">Powtórz hasło</label>
            <input type="password"/>
        </form>
        </span>
        <div className='LoginForm-buttons'>
            <Link to="/logowanie" className='button noborder'>Zaloguj się</Link>
            <Link to="/rejestracja" className='button'>Załóż konto</Link>
        </div>
    </section>
    </>)
}