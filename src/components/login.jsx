import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const LoginForm = () => {
    return (<section className='LoginForm'>
    <h3>Zaloguj się</h3>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <h6>Strona w budowie</h6>
    <div className='home__homeheader__buttons'>
        <Link to="/" className='button'>Wracam na główną stronę</Link>
    </div>
    </section>)
}