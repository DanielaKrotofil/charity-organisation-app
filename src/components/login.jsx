import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const LoginForm = () => {
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
    <section className='LoginForm'>
        <h2>Zaloguj się</h2>
        <img className='decoration-line' src={decorationline} alt="line"/>
        <span className='LoginForm__main'>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="password">Hasło</label>
            <input type="password"/>
        </form>
        </span>
        <div className='LoginForm-buttons'>
            <Link to="/rejestracja" className='button noborder'>Załóż konto</Link>
            <Link to="/logowanie" className='button'>Zaloguj się</Link>
        </div>
    </section>
    </>)
}