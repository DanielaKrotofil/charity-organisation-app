import people from '../assets/People.jpg';
import signature from '../assets/Signature.svg';
import decorationline from '../assets/Decoration.svg';

const HomeAboutUs = () => {
    return (<div className='row aboutus'>
    <div className='aboutus-text'>
        <span>
            <h5>O nas</h5>
            <img className='decoration-line' src={decorationline} alt="line"/>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        </span>
        <div className='signature'>
            <img src={signature} alt="signature" />
        </div>
    </div>
    <div className="aboutus-img">
        <img src={people} alt="people"/>
    </div>
    </div>)
}
export default HomeAboutUs