import decorationline from '../assets/Decoration.svg';
import instaIcon from '../assets/Instagram.svg';
import fbIcon from '../assets/Facebook.svg';
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const Contact = () => {
  const [messageList, setMessagesList] = useState([]);
  const [alert, setAlert] = useState([]);

  const [nameValue, setNameValue] = useState("");
  const updateName = ({ target }) => setNameValue(target.value);
  const [messageValue, setMessageValue] = useState("");
  const updateMessage = ({ target }) => setMessageValue(target.value);
  const [emailValue, setEmailValue] = useState("");
  const updateEmail = ({ target }) => setEmailValue(target.value);

  const sendMessage = async (e) => {
    e.preventDefault();

    const localErrors = [];

    const nameWords = nameValue.split(" ");
    if (nameWords.length > 1) localErrors.push("Podane imię jest nieprawidłowe!");
    if (messageValue.length < 120)
      localErrors.push("Wiadomość musi mieć co najmniej 120 znaków!");
    if (!emailValue.includes("@"))
      localErrors.push("Podany email jest nieprawidłowy!");

    setAlert(localErrors);

    if (localErrors.length === 0) {
      try {
        const messagesCollectionRef = collection(db, "messages");

        await addDoc(messagesCollectionRef, {
          name: nameValue,
          email: emailValue,
          message: messageValue,
        });

        setMessagesList((prevState) => [
          ...prevState,
          {
            id: prevState.length + 1,
            name: nameValue,
            email: emailValue,
            message: messageValue,
          },
        ]);

        setNameValue("");
        setEmailValue("");
        setMessageValue("");

        setAlert(["Wiadomość została wysłana! Wkrótce się skontaktujemy."]);
      } catch (error) {
        console.error("Błąd podczas zapisywania danych do Firestore:", error);
      }
    }
  };

  return (
    <>
      <div className="contactForm">
        <div className="contactForm_empty"></div>
        <div className="contactForm_form">
          <h2>Skontaktuj się z nami</h2>
          <img className="decoration-line" src={decorationline} alt="line" />
          <form onSubmit={sendMessage}>
            <p className="alert_errors">{alert.join(", ")}</p>
            <span className="form__part1">
              <span className="form__part1">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  value={nameValue}
                  onChange={updateName}
                />
              </span>

              <span className="form__part1">
                <label htmlFor="email">Wpisz swój e-mail</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  value={emailValue}
                  onChange={updateEmail}
                />
              </span>
            </span>

            <label htmlFor="text">Wpisz swoją wiadomość</label>
            <textarea
              value={messageValue}
              onChange={updateMessage}
              rows="5"
              type="text"
              id="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            <span className="btn-form">
              <button className="button" type="submit">
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