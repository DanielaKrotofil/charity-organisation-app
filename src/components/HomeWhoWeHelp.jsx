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
        {institution.map(({index, id, description, title, goal, needs}) => (
          <div key={index}>
            <p className="whowehelp__description">{description}</p>
            <div className="whowehelp__container__element">
                <div className="whowehelp__container__element-part1">
                    <h4>{title}</h4>
                    <h6>{goal}</h6>
                </div>
                <span><h6>{needs}</h6></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhoWeHelp;