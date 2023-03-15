import BookContainer from "./BookContainer";
import CatalogContainer from "./CatalogContainer";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import StoreContainer from "./StoreContainer";
import Subscrible from "./Subscrible";

function Catalog() {
    return(
        <>
        <Navbar2/>
        <div className="catalog-body">
            <CatalogContainer/>
            <BookContainer/>
            <StoreContainer/>
            <Subscrible/>
            <Footer/>
        </div>
        </>
    )
}
export default Catalog;