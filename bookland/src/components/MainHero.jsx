import "../css/mainHero.css"
function MainHero() {
    return (
        <div className="mainHero">
            <div className="product">
                <marquee behavior direction>
                    <div className="marquee">
                        <div className="product1">
                            <img src alt="" className="productItem1" />
                            <div className="product1Info">
                                <p className="product1Title">Think and Grow Rich</p>
                                <p className="author1">by Napoleon Hill</p>
                                <div className="product1Stt">
                                    <span className="product1Price">$9.5</span>
                                    <div className="starContainer">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product2">
                            <img src alt="" className="productItem1" />
                            <div className="product2Info">
                                <p className="product2Title">Business &amp; Strategy</p>
                                <p className="author2">by Jamet Sigh</p>
                                <div className="product2Stt">
                                    <span className="product2Price">$12.0</span>
                                    <div className="starContainer">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </marquee>
            </div>
            <div className="heading">
                <div className="headingText">
                    <div className="bestSeller">BEST SELLER</div>
                    <div className="thinkAndGrow">Think and Grow Rich</div>
                    <div className="allow">
                        <span className="napoleonHill">Napoleon Hill</span>
                        <span className="bAndS">Business and Strategy</span>
                    </div>
                    <div className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, rem ea. Dolores
                        sit, perferendis fugit explicabo qui vitae laboriosam, possimus dolore saepe aut error tenetur!
                        Unde dolorem reprehenderit voluptatibus commodi.</div>
                    <div className="priceContainer">
                        <span id="price1">$9.5</span>
                        <span id="defaultPrice1">$12.0</span>
                        <button id="sale1">20% OFF</button>
                    </div>
                    <div className="btnContainer">
                        <button className="buyNow">Buy Now</button>
                        <button className="seeDetails">See details</button>
                    </div>
                </div>
                <div className="mainFooter">
                    <p className="ourPartner">Our partner</p>
                    <div className="ourPartnerContainer">
                        <img src="../image/Group 7.png" alt="" className="partner1" />
                        <img src="../image/Group 9.png" alt="" className="partner2" />
                        <img src="../image/Group 11.png" alt="" className="partner3" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainHero;