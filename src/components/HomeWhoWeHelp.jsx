import decorationline from '../assets/Decoration.svg';
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const WhoWeHelp = () =>{
    const [dataToRender, setDataToRender] = useState(null);
    const [fundations, setFundations] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "fundations")).then((querySnapshot) => {
            const tempArr = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            })

            setFundations(tempArr);
        });
    }, []);

    const [organizations, setOrganizations] = useState([]);
    useEffect(() => {
        getDocs(collection(db, "organizations")).then((querySnapshot) => {
            const tempArr = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            })

            setOrganizations(tempArr);
        });
    }, [])

    const [locals, setLocals] = useState([]);
    useEffect(() => {
        getDocs(collection(db, "LocalFundraisers")).then((querySnapshot) => {
            const tempArr = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
                console.log(doc.id, " => ", doc.data());
            })

            setLocals(tempArr);
        });
    }, []);

	const [backgroundColor, setBackgroundColor] = useState("blue");


	const change = (backgroundColor) => {
		setBackgroundColor(backgroundColor);
	};

    const handleClick = (id) => {
        console.log(`ID: ${id}`);
      };

	return (
		<>
        <h2>Komu pomagamy?</h2>
        <img className='decoration-line' src={decorationline} alt="line"/>
        <div>
            <button className="button__whowehelp" onClick={() => change("orange")}>Fundajcom</button>
			<button className="button__whowehelp" onClick={() => change("blue")}>Organizacjom pozarządowym</button>
			<button className="button__whowehelp" onClick={() => change("green")}>Lokalnym zbiórkom</button>
        </div>
        <div className="whowehelp__container">
            <div
                style={{
                        height: '100px',
                        width: '100px',
                        backgroundColor: backgroundColor,
                }}>
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(3)}>3</button>
            </div>
        </div>
		</>
	);

}

export default WhoWeHelp
