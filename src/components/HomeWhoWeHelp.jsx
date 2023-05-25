import decorationline from '../assets/Decoration.svg';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const WhoWeHelp = () => {
  const [fundations, setFundations] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [locals, setLocals] = useState([]);
  const [institution, setInstitution] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "organizations"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      // Sortowanie organizacji według pola "title"
      tempArr.sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
        return titleA.localeCompare(titleB);
      });
      setOrganizations(tempArr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "LocalFundraisers"));
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      // Sortowanie lokalnych zbiórek według pola "title"
      tempArr.sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
        return titleA.localeCompare(titleB);
      });
      setLocals(tempArr);
    };
    fetchData();
  }, []);

  // Sortowanie tablicy institution przed użyciem w renderowaniu
  const sortedInstitution = [...institution].sort((a, b) => a.id - b.id);

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
        {sortedInstitution.map(({ index, description }) => (
          <div key={`description_${index}`}>
            {description && (
              <p className="whowehelp__description">{description}</p>
            )}
          </div>
        ))}
        {sortedInstitution
          .filter(({ id }) => id !== undefined) // Pomijanie pozycji bez pola "id"
          .map(({ id, title, goal, needs }) => (
            <div key={`element_${id}`}>
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
