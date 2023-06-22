import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">P&J Luxury Apartments</h1>
        <span className="siDistance">300m od centrum</span>
        <span className="siTaxiOp">Bezpłatna taksówka z lotniska</span>
        <span className="siSubtitle">Apartament typu studio</span>
        <span className="siFeatures">
          Apartament na wyłączność • 1 sypialnia • 1 łazienka • 21m²
        </span>
        <span className="siCancelOp">Darmowa rezygnacja </span>
        <span className="siCancelOpSubtitle">
          Możesz anulować później, więc zarezerwuj tę świetną cenę już dziś!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fantastyczny</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">250zł</span>
          <span className="siTaxOp">Cena obejmuje podatki i opłaty</span>
          <button className="siCheckButton">Zobacz dostępność</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
