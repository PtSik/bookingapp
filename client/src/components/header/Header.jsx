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
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
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
    pokoje: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: {destination, date, options} });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Znajdź miejsce na kolejny pobyt</h1>
            <p className="headerDesc">
              Szukaj ofert hoteli, domów i wielu innych obiektów...Odkryj
              szeroką gamę ofert obejmujących hotele, domy wakacyjne i wiele
              innych unikalnych obiektów.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Dokąd się wybierasz"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
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
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.dorosły} dorosły · ${options.dzieci} dzieci · ${options.pokoje} pokoje`}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Dorosły</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.dorosły <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("dorosły", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.dorosły}
                        </span>
                        <button
                          className="optionCounterButton "
                          onClick={() => handleOption("dorosły", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Dzieci</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.dzieci <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("dzieci", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.dzieci}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("dzieci", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Pokoje</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.pokoje <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("pokoje", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.pokoje}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("pokoje", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Szukaj
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
