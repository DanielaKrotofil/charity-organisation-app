import decorationline from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (<>
        <section className='home__homeheader container'>
            <div className='home__homeheader__text'>
                <h2>Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img className='decoration-line' src={decorationline} alt="line"/>
                <div className='buttons-set'>
                    <Link to="/logowanie" className='button'>ODDAJ <br/> RZECZY</Link>
                    <Link to="/logowanie" className='button'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    </>)
}

export default HomeHeader