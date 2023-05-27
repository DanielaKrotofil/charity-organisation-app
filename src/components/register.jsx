import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const RegisterForm = () => {
    return (<section className='LoginForm'>
    <h2>Zarejestruj się</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <span className='LoginForm__main'>Strona w budowie</span>
    <div>
        <Link to="/logowanie" className='button'>Zaloguj się</Link>
        <Link to="/rejestracja" className='button'>Załóż konto</Link>
    </div>
    <Link to="/" className='button'>Wracam na główną stronę</Link>
    </section>)
}