import signature from '../assets/Signature.svg';
import decorationline from '../assets/Decoration.svg';

const HomeAboutUs = () => {
    return (<div className='row aboutus'>
    <div className='aboutus-text'>
        <span>
            <h2>O nas</h2>
            <img className='decoration-line' src={decorationline} alt="line"/>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. <br /> Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        </span>
        <div className='signature'>
            <img src={signature} alt="signature" />
        </div>
    </div>
    <div className="aboutus-img"/>
    </div>)
}
export default HomeAboutUs