import HomeFundations from "./HomeFundations";
import HomeOrganizations from "./HomeOrganizations";
import HomeLocalFundraisers from "./HomeLocalFundraisers";
import decorationline from '../assets/Decoration.svg';

const WhoWeHelp = () =>{
    return (<>
    <h2>Komu pomagamy?</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <HomeFundations/>
    <HomeOrganizations/>
    <HomeLocalFundraisers/>
    </>)
}

export default WhoWeHelp