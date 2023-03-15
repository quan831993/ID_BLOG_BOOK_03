import "../css/productMain.css"
function ProductMain() {
    return (
        <div className="productMain">
            <img src alt="" />
            <div className="productMainInfo">
                <p>Think and Grow Rich</p>
                <div className="subInfo">
                    <div className="subLeft">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" id="star5" />
                        <p>4.0</p>
                    </div>
                    <div className="subRight">
                        <div className="subRight1">
                            <div className="totalReview">
                                <i className="fa-solid fa-message" />
                                <p>235 Reviews</p>
                            </div>
                            <div className="totalLike">
                                <i className="fa-solid fa-thumbs-up" />
                                <p>456k Like</p>
                            </div>
                        </div>
                        <div className="subRight2">
                            <i className="fa-brands fa-square-facebook" id="fb" />
                            <i className="fa-brands fa-square-twitter" id="tw" />
                            <i className="fa-brands fa-line" id="line" />
                            
                        </div>
                    </div>
                </div>
                <div className="productStt">
                    <div className="productSttLeft">
                        <img src alt="" />
                        <div className="authorInfo">
                            <p>Writen by</p>
                            <span>Napoleon Rich</span>
                        </div>
                        <div className="publish">
                            <p>Publisher</p>
                            <span>Printarea Studios</span>
                        </div>
                        <div className="publishYear">
                            <p>Year</p>
                            <span>2019</span>
                        </div>
                    </div>
                    <div className="productSttRight">
                        <button className="freeShipping">
                            <i className="fa-solid fa-bolt-lightning" />
                            <p>FREE SHIPPING</p>
                        </button>
                        <button className="inStock">
                            <i className="fa-solid fa-shield-halved" />
                            <p>IN STOCKS</p>
                        </button>
                    </div>
                </div>
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    </p>
                </div>
                <div className="addToCartContainer">
                    <div className="priceContainer">
                        <p className="real-price">$15,63</p>
                        <p className="origin-price">$16,99</p>
                        <button>2%</button>
                    </div>
                    <div className="atcBtnContainer">
                        <div className="quantity-container">
                            <i className="fa-solid fa-minus" />
                            <p>1</p>
                            <i className="fa-solid fa-plus" />
                        </div>
                        <button>
                            <i className="fa-solid fa-cart-shopping" /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductMain;