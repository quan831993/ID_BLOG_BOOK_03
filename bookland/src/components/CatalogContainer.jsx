import "../css/catalogContainer.css"
function CatalogContainer() {
    return(
        <div>
        <div className="book">
          <p>Books</p>
        </div>
        <div className="catalogi-container">
          <div className="catalogi-left">
            <p id="today">Today</p>
            <p id="thisWeek">This Week</p>
            <p id="thisMonth"> This Month</p>
          </div>
          <div className="catalogi-right">
            <div className="view-container">
              <img src="../image/open-menu 1.png" alt="" />
              <img src="../image/ic_gridView.png" alt="" />
              <img src="../image/ic_sidebarView.png" alt="" />
            </div>
            <div className="fillter">
              <img src="../image/filter (3) 1.png" alt="" />
              <p>Categories</p>
            </div>
            <div className="sort">
              <img src="../image/sort 1.png" alt="" />
              <p>Newest</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CatalogContainer;