import Banner from "./Banner";
import BookOnSale from "./BookOnSale";
import BrandLogo from "./BrandLogo";
import Choose from "./Choose";
import Footer from "./Footer";
import MainHero from "./MainHero";
import Navbar from "./Navbar";
import StoreContainer from "./StoreContainer";
import Subscrible from "./Subscrible";
function Homepage() {
    return (
        <>
            <Navbar />
            <MainHero />
            <BrandLogo />
            <Banner />
            <Choose />
            <BookOnSale />
            <StoreContainer />
            <Subscrible />
            <Footer />
        </>
    )
}
export default Homepage;