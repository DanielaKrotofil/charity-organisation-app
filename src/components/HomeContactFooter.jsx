import decorationline from '../assets/Decoration.svg';
import instaIcon from '../assets/Instagram.svg';
import fbIcon from '../assets/Facebook.svg';

const Contact = () => {
    return (<>
    <div className='contactForm'>
        <div className='contactForm_empty'></div>
        <div className='contactForm_form'>
        <h2>Skontaktuj się z nami</h2>
        <img className='decoration-line' src={decorationline} alt="line"/>
        <form>

            <span className='form__part1'>
                <span className='form__part1'>
                    <label for="name">Wpisz swoje imię</label>
                    <input type="text" id="name" name="name" placeholder="Krzysztof" />
                </span>

               <span className='form__part1'>
                    <label for="email">Wpisz swój e-mail</label>
                    <input type="email" id="email" placeholder='abc@xyz.pl' />
               </span>
            </span>

            <label for="text">Wpisz swoją wiadomość</label>
            <textarea rows="5" type="text" id="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

            <span className='btn-form'>
                <button className='button' type="submit">Wyślij</button>
            </span>

        </form>
        </div>
    </div>
    </>)
}
export default Contact

export const Footer = () => {
    return (<>
        <footer>
            <span>Copyright by Coders Lab</span>
            <span className='footer-icons'>
                <img src={fbIcon} alt="fbIcon" />
                <img src={instaIcon} alt="instaIcon" />
            </span>
        </footer>
    </>)
}