import homeImage from '../assets/Home-Hero-Image.jpg';
import decorationline from '../assets/Decoration.svg';

const HomeHeader = () => {
    return (
    <section className='home__homeheader container'>
        <div>
            <img src={homeImage} className='home__homeheader__image'></img>
        </div>
        <div className='home__homeheader__text'>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={decorationline} alt="line"/>
            <div>
                <button>ODDAJ RZECZY</button>
                <button>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        </div>
    </section>)
}

export default HomeHeader