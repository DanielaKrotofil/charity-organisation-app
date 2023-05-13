import HomeHeader from './HomeHeader';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {
    return (<section className='home'>
    <HomeHeader className='container'/>
    </section>)
}

export default Home