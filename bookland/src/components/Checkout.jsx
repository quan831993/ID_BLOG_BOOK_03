import CheckoutInfo from "./CheckoutInfo";
import Choose from "./Choose";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Step from "./Step";
import Subscrible from "./Subscrible";
function Checkout() {
    return(
        <>
        <Navbar2/>
        <Step/>
        <CheckoutInfo/>
        <Choose/>
        <Subscrible/>
        <Footer/>
        </>
    )
}
export default Checkout;