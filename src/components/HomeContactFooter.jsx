import decorationline from '../assets/Decoration.svg';
import instaIcon from '../assets/Instagram.svg';
import fbIcon from '../assets/Facebook.svg';
import { useState } from "react";

const Contact = () => {
  const [messageList, setMessagesList] = useState([]);
  const [alert, setAlert] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const updateName = (event) => {
    setNameValue(event.target.value);
  };

  const updateMessage = (event) => {
    setMessageValue(event.target.value);
  };

  const updateEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const localErrors = [];

    const nameWords = nameValue.split(' ');
    if (nameWords.length > 1) {
      localErrors.push('Podane imię jest nieprawidłowe!');
    }
    if (messageValue.length < 120) {
      localErrors.push('Wiadomość musi mieć co najmniej 120 znaków!');
    }
    if (!emailValue.includes('@')) {
      localErrors.push('Podany email jest nieprawidłowy!');
    }

    setAlert(localErrors);

    if (localErrors.length === 0) {
      setMessagesList((prevState) => {
        const newEl = {
          id: prevState.length + 1,
          name: nameValue,
          email: emailValue,
          message: messageValue,
        };
        return [...prevState, newEl];
      });

      // Clear form values
      setNameValue('');
      setMessageValue('');
      setEmailValue('');

      // Show success message
      setAlert(['Wiadomość została wysłana! Wkrótce się skontaktujemy.']);
    }
  };

  return (
    <>
      <div className='contactForm'>
        <div className='contactForm_empty'></div>
        <div className='contactForm_form'>
          <h2>Skontaktuj się z nami</h2>
          <img className='decoration-line' src={decorationline} alt='line' />
          <form onSubmit={sendMessage}>
            {alert.length > 0 && <p className='alert_errors'>{alert.join(', ')}</p>}
            <span className='form__part1'>
              <span className='form__part1'>
                <label htmlFor='name'>Wpisz swoje imię</label>
                <input type='text' placeholder='Krzysztof' value={nameValue} onChange={updateName} />
              </span>

              <span className='form__part1'>
                <label htmlFor='email'>Wpisz swój e-mail</label>
                <input type='email' placeholder='abc@xyz.pl' value={emailValue} onChange={updateEmail} />
              </span>
            </span>

            <label htmlFor='text'>Wpisz swoją wiadomość</label>
            <textarea
              value={messageValue}
              onChange={updateMessage}
              rows='5'
              type='text'
              id='text'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />

            <span className='btn-form'>
              <button className='button' type='submit'>
                Wyślij
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;



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