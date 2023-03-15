import "../css/step.css"
function Step() {
    return(
        <div className="stepper">
        <div className="circle">
          <i className="fa-solid fa-check" />
        </div>
        <p>Shopping Summary</p>
        <hr className="a" />
        <div className="circle2" />
        <p>Checkout</p>
        <hr />
        <div className="circle2" />
        <p>Payment</p>
        <hr />
        <div className="circle2" />
        <p>Shipping</p>
      </div>
    )
}
export default Step;