import "../css/navbar.css";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="NAV_v4">
        <Link to="/">
        <img src="./image/logo.png" alt="" className="logo" />
        </Link>
        <div className="searchBox">
          <div className="menus">
            <p id="menus">MENUS</p>
          </div>
          <input className="search" type="text" placeholder="Search book here ..." />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="navLeft">
          <Link to="/login">
            <button className="loginBtn">Log in</button>
          </Link>
         <Link to="/signup">
         <button className="signupBtn">Sign up</button>
         </Link>
        </div>
      </div>
    </>
  )
}
export default Navbar;