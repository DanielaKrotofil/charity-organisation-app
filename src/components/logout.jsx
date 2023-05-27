import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const LogoutForm = () => {
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
    <section className='logout-layout'>
    <h2>Wylogowanie nastąpiło <br /> pomyślnie!</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <Link to="/" className='button'>Strona główna</Link>
    </section>
    </>)
}