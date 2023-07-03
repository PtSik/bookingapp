import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Oszczędzaj czas, oszczędzaj pieniądze!</h1>
      <span className="mailDesc">Zarejestruj się, a wyślemy Ci najlepsze oferty</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subskrybuj</button>
      </div>
    </div>
  )
}

export default MailList