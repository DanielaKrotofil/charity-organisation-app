import decorationline from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';


const HomeSimpleSteps = () =>{

    return (<section className='about'>
    <h5>Wystarczą 4 proste kroki</h5>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <div className='about__steps'>
        <div className="about__steps-box">
            <img src={icon1} alt="t-shirt"/>
            <h6>Wybierz rzeczy</h6>
            <span className='line'/>
            <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="about__steps-box">
            <img src={icon2} alt="bag"/>
            <h6>Spakuj je</h6>
            <span className='line'/>
            <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="about__steps-box">
            <img src={icon3} alt="search"/>
            <h6>Zdecyduj komu chcesz pomóc</h6>
            <span className='line'/>
            <p>wybierz zaufane miejsce</p>
        </div>
        <div className="about__steps-box">
            <img src={icon4} alt="arrows"/>
            <h6>Zamów kuriera</h6>
            <span className='line'/>
            <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
    </div>
    <span></span>
    <div className='button-big'>
        <Link to="/logowanie" >ODDAJ <br /> RZECZY</Link>
    </div>
    </section>)
}

export default HomeSimpleSteps