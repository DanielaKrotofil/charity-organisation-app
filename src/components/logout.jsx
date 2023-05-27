import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const RegisterForm = () => {
    return (<section className='LoginForm'>
    <h2>Wylogowano pomyślnie!</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <Link to="/" className='button'>Strona główna</Link>
    </section>)
}