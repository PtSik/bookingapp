import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"

const List = () => {

const location = useLocation()
console.log(location)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Szukaj</h1>
            <div className="lsItem">
              <label>Dokąd się wybierasz?</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Data zameldowania</label>
              
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
      </div>
  )
}

export default List