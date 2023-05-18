import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const RegisterForm = () => {
    return (<section className='LoginForm'>
    <h3>Zarejestruj się</h3>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <h6>Strona w budowie</h6>
    <div>
        <Link to="/" className='button'>Wracam na główną stronę</Link>
    </div>
    </section>)
}