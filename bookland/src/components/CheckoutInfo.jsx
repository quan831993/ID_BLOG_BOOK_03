import "../css/checkoutInfo.css"
function CheckoutInfo() {
    return(
        <div className="checkoutInfo">
        <div className="checkoutLeft">
          <p>Buyer Info</p>
          <div className="checkout1">
            <div className="info">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="info">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div className="checkout2">
            <div className="info">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" />
            </div>
            <div className="info">
              <label htmlFor="phone">Mobile Phone Number</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <div className="info">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="checkout3">
            <div className="info">
              <label htmlFor="state">State</label>
              <input type="text" id="state" />
            </div>
            <div className="info">
              <label htmlFor="lastName">Postcode/Zip</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div className="info">
            <label htmlFor="city">Town/City</label>
            <input type="text" id="city" />
          </div>
          <div className="info">
            <label htmlFor="note">Note</label>
            <input type="text" id="note" />
          </div>
        </div>
        <div className="checkoutRight">
          <p>Payment</p>
          <div className="checkout4">
            <img src="../image/method01.png" alt="" />
            <img src="../image/method01 (1).png" alt="" />
            <img src="../image/method01 (2).png" alt="" />
          </div>
          <hr />
          <div className="info">
            <label htmlFor="nameOnCard">Name On Card</label>
            <input type="text" id="nameOnCard" />
          </div>
          <div className="checkout5">
            <div className="info">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="0000 - 0000 - 0000 - 0000" />
            </div>
            <div className="info">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" />
            </div>
          </div>
          <div className="checkout6">
            <div className="info">
              <label htmlFor="month">Month</label>
              <select name="month" id="month">
                <option value={1}>January</option>
                <option value={2}>Ferbuary</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
              </select>
            </div>
            <div className="info">
              <label htmlFor="year">Year</label>
              <select name="year" id="year">
                <option value="year">Select year</option>
              </select>
            </div>
          </div>
          <div className="checkoutBtn">
            <button className="placeOrder">PLACE ORDER</button>
          </div>
        </div>
      </div>
    )
}
export default CheckoutInfo;