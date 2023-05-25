import decorationline from '../assets/Decoration.svg';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const WhoWeHelp = () => {
  const [fundations, setFundations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "fundations"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      setFundations(tempArr);
      setInstitution(tempArr);
    };
    fetchData();
  }, []);

  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "organizations"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      setOrganizations(tempArr);
    };
    fetchData();
  }, []);

  const [locals, setLocals] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "LocalFundraisers"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      setLocals(tempArr);
    };
    fetchData();
  }, []);

  const [institution, setInstitution] = useState([]);

  const handleClick = (id) => {
    console.log(`ID: ${id}`);
  };

  return (
    <>
      <h2>Komu pomagamy?</h2>
      <img className='decoration-line' src={decorationline} alt="line"/>
      <div>
        <button className='button__whowehelp' onClick={() => setInstitution(fundations)}>Fundajcom</button>
        <button className='button__whowehelp' onClick={() => setInstitution(organizations)}>Organizacjom pozarządowym</button>
        <button className='button__whowehelp' onClick={() => setInstitution(locals)}>Lokalnym zbiórkom</button>
      </div>
      <div className="whowehelp__container">
        {institution.map(({index, buttonName, description}) => (
          <div className="wedding-styles__element" key={index}>
            <p>{buttonName}</p>
            <p>{description}</p>
          </div>
        ))}
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
      </div>
    </>
  );
}

export default WhoWeHelp;
/*
goal
needs
title
*/