import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m od centrum</span>
        <span className="siTaxiOp">Bezpłatna taksówka z lotniska</span>
        <span className="siSubtitle">
        Apartament typu studio
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Darmowa rezygnacja </span>
        <span className="siCancelOpSubtitle">
        Możesz anulować później, więc zarezerwuj tę świetną cenę już dziś!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Fantastyczny</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice} zł</span>
          <span className="siTaxOp">Cena obejmuje podatki i opłaty</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Zobacz dostępność</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
