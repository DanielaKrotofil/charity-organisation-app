import decorationline from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
    <section className='home__homeheader '>
        <div className='home__homeheader__text'>
            <h5>Zacznij pomagać!</h5>
            <h5>Oddaj niechciane rzeczy w zaufane ręce</h5>
            <img src={decorationline} alt="line"/>
            <div className='home__homeheader__buttons'>
                <Link to="/logowanie" className='button'>ODDAJ <br/> RZECZY</Link>
                <Link to="/logowanie" className='button'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
            </div>
        </div>
    </section>)
}

export default HomeHeader

/*
<div>
        <img src={homeImage} className='home__homeheader__image'></img>
        </div>
*/