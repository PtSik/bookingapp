import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">DreamyTravels</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <button onClick={handleLogout} className="lButton2">Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="lButton2">Rejestracja</button>
            </Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="lButton2">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;