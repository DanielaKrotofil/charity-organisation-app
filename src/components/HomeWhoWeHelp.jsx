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
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = institution.filter(({ id }) => id !== undefined).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleInstitutionChange = (newInstitution) => {
    setInstitution(newInstitution);
    setPage(1);
  };

  const sortedInstitution = [...institution].sort((a, b) => {
    const idA = a.id || "";
    const idB = b.id || "";
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    return 0;
  });

  const displayItems = sortedInstitution
    .filter(({ id }) => id !== undefined)
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <h2>Komu pomagamy?</h2>
      <img className='decoration-line' src={decorationline} alt="line" />
      <div className='whowehelp__buttons'>
        <button className={`button__whowehelp ${institution === fundations ? 'whowehelp__active' : ''}`} onClick={() => handleInstitutionChange(fundations)}>Fundajcom</button>
        <button className={`button__whowehelp ${institution === organizations ? 'whowehelp__active' : ''}`} onClick={() => handleInstitutionChange(organizations)}>Organizacjom pozarządowym</button>
        <button className={`button__whowehelp ${institution === locals ? 'whowehelp__active' : ''}`} onClick={() => handleInstitutionChange(locals)}>Lokalnym zbiórkom</button>
      </div>
      <div className="whowehelp__container">
        <div className="whowehelp__description">
        {sortedInstitution.map(({ index, description }) => (
          <div key={`description_${index}`}>
            {description && (
              <p >{description}</p>
            )}
          </div>
        ))}
        </div>
        {displayItems.map(({ id, title, goal, needs }, index) => (
            <div key={`element_${id}`}>
                <div className="whowehelp__container__element">
                  <div className="whowehelp__container__element-part1">
                      <h4>{title}</h4>
                      <h6>{goal}</h6>
                  </div>
                  <span>
                    <h6>{`${needs}`}</h6>
                  </span>
                </div>
                {index !== displayItems.length - 1 && <span className="separator"></span>}
            </div>
        ))}
        {totalPages > 1 && (
          <div className="whowehelp__navigation">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={`page_${pageNumber}`}
                className={`whowehelp__navigation__button ${pageNumber === page ? 'whowehelp__active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default WhoWeHelp;
