import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    // Dispatch the LOGOUT action
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">tahrimbooking</span>
        </Link>
        {user ? (
          user.username && (
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: "5px" }}>{user.username}</div>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "none" }}
                className="navButton"
                onClick={handleLogout} // Call handleLogout function on click
              >
                Logout
              </Link>
            </div>
          )
        ) : (
          <div className="navItems">
            <Link
              to="/signin"
              style={{ color: "inherit", textDecoration: "none" }}
              className="navButton"
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
              className="navButton"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
