import "../css/navbar2.css"
function Navbar2() {
    return(
        <div className="NAV_v4-1">
        <img src="../image/logo1.png" alt="" className="logo" />
        <div className="searchBox">
          <div className="menus">
            <p id="menus">MENUS</p>
          </div>
          <input className="search" type="text" placeholder="Search book here ..." />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="navLeft">
          <div className="likeContainer">
            <i className="fa-regular fa-heart" />
            <div className="likeNum">21</div>
          </div>
          <div className="cartContainer">
            <i className="fa-solid fa-cart-shopping" />
            <div className="cartNum">19</div>
          </div>
          <div className="userStt">
            <img src alt="" />
            <div className="user">
              <div className="userName">Brian</div>
              <div className="userMail">briancorner@mail.com</div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Navbar2;