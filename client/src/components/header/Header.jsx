import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faCity,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; //main css file
import "react-date-range/dist/theme/default.css"; //theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    dorosły: 1,
    dzieci: 0,
    pokój: 1,
  });

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
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Dokąd się wybierasz"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM//yyyy")} to ${format(
              date[0].endDate,
              "dd/MM//yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${options.dorosły} dorosły · ${options.dzieci} dzieci · ${options.pokój} pokój`} </span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Dorosły</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterButton">1</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Dzieci</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterButton">0</span>
                <button className="optionCounterButton">+</button>
              </div>
              <div className="optionItem">
                <span className="optionText">Pokój</span>
                <button className="optionCounterButton">-</button>
                <span className="optionCounterButton">1</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Szukaj</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
