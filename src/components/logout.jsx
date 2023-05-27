import { Link } from 'react-router-dom';
import decorationline from '../assets/Decoration.svg';

export const LogoutForm = () => {
    return (<section className='logout-layout'>
    <h2>Wylogowanie nastąpiło <br /> pomyślnie!</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <Link to="/" className='button'>Strona główna</Link>
    </section>)
}