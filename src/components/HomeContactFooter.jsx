import decorationline from '../assets/Decoration.svg';
const Contact = () => {
    return (<div className='contactForm__container'>
    <h2>Skontaktuj się z nami</h2>
    <img className='decoration-line' src={decorationline} alt="line"/>
    <form>
        <label for="user">Wpisz swoje imię</label>
        <input type="text" id="name" name="name" placeholder="Krzysztof" />

        <label for="surname">Wpisz swój e-mail</label>
        <input type="email" id="email" placeholder='abc@xyz.pl' />

        <label for="text">Wpisz swoją wiadomość</label>
        <textarea rows="5" type="text" id="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

        <button className='button' type="submit">Wyślij</button>
    </form>
    </div>)
}
export default Contact

export const Footer = () => {
    return (<>
        <footer>
            <span>Copyright by Coders Lab</span>
        </footer>
    </>)
}