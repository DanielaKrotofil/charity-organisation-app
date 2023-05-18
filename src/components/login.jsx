import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (<section className='LoginForm'>
    <h1>LOGOWANIE</h1>
    <h2>Strona w budowie</h2>
    <div className='home__homeheader__buttons'>
        <Link to="/" className='button'>Wracam na główną stronę</Link>
        <Link to="/rejestracja" className='button'>Rejestracja</Link>
    </div>
    </section>)
}