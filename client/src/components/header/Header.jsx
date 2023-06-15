import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faCity,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Pobyty</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Loty</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Wynajem Samochodow</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCity} />
            <span>Atrakcje</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taksówki Lotniskowe</span>
          </div>
        </div>
        <h1 className="headerTitle">Znajdź miejsce na kolejny pobyt</h1>
        <p className="headerDesc">
          Szukaj ofert hoteli, domów i wielu innych obiektów...Odkryj szeroką
          gamę ofert obejmujących hotele, domy wakacyjne i wiele innych
          unikalnych obiektów.
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
