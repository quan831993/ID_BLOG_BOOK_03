import "../css/navbar.css";
function Navbar() {
    return (
        <>
        <div className="NAV_v4">
        <img src="./image/logo.png" alt="" className="logo" />
        <div className="searchBox">
          <div className="menus">
            <p id="menus">MENUS</p>
          </div>
          <input className="search" type="text" placeholder="Search book here ..." />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="navLeft">
          <button className="loginBtn">Log in</button>
          <button className="signupBtn">Sign up</button>
        </div>
      </div>
        </>
    )
}
export default Navbar;