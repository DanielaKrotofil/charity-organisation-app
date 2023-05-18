import decorationline from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';


const HomeSimpleSteps = () =>{
    return (<>
    <h1>Wystarczą 4 proste kroki</h1>
    <img src={decorationline} alt="line"/>
    <div>
        <img src={icon1} alt="t-shirt"/>
        <img src={icon2} alt="bag"/>
        <img src={icon3} alt="search"/>
        <img src={icon4} alt="arrows"/>
    </div>
    </>)
}

export default HomeSimpleSteps