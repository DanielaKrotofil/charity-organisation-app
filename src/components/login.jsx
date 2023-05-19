import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const LoginForm = () => {
    return (<section className='LoginForm'>
    <h2>Zaloguj się</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <span className='LoginForm__main'>Strona w budowie</span>
    <div className='home__homeheader__buttons'>
        <Link to="/" className='button'>Wracam na główną stronę</Link>
    </div>
    </section>)
}