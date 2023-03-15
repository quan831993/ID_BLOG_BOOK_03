import "../css/product-detail.css"
function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <table>
                    <thead>
                        <tr>
                            <td className="content-left">Details Product</td>
                            <td className="content-right">Customer Reviews</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p">Book Title</td>
                            <td className="p-info">Think and Grow Rich</td>
                        </tr>
                        <tr>
                            <td className="p">Author</td>
                            <td className="p-info">Napoleon Rich</td>
                        </tr>
                        <tr>
                            <td className="p">ISBN</td>
                            <td className="p-info">121341381648 (ISBN13: 121341381648)</td>
                        </tr>
                        <tr>
                            <td className="p">Ediiton Language</td>
                            <td className="p-info">English</td>
                        </tr>
                        <tr>
                            <td className="p">Book Format</td>
                            <td className="p-info">Paperback, 450 Pagesh</td>
                        </tr>
                        <tr>
                            <td className="p">Date Published</td>
                            <td className="p-info">August 10th 2019</td>
                        </tr>
                        <tr>
                            <td className="p">Publisher</td>
                            <td className="p-info">Wepress Inc.</td>
                        </tr>
                        <tr>
                            <td className="p">Tags</td>
                            <td className="p-info">
                                <button>Drama</button>
                                <button>Adventure</button>
                                <button>Survival</button>
                                <button>Biography</button>
                                <button>Trending2020</button>
                                <button>Bestseller</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="product-detail-right">
                <p>Related Books</p>
                <div className="book">
                    <img src alt="" />
                    <div className="book-info">
                        <p id="relatedTitle">Terrible Madness</p>
                        <p id="relatedTags">THRILLE, DRAMA, HORROR</p>
                        <div className="related-price">
                            <p id="relatedPrice">$45.4</p>
                            <p id="firstPrice">$98.4</p>
                        </div>
                        <button><i className="fa-solid fa-cart-shopping" />Add to cart</button>
                    </div>
                </div>
                <div className="book">
                    <img src alt="" />
                    <div className="book-info">
                        <p id="relatedTitle">Terrible Madness</p>
                        <p id="relatedTags">THRILLE, DRAMA, HORROR</p>
                        <div className="related-price">
                            <p id="relatedPrice">$45.4</p>
                            <p id="firstPrice">$98.4</p>
                        </div>
                        <button><i className="fa-solid fa-cart-shopping" />Add to cart</button>
                    </div>
                </div>
                <div className="book">
                    <img src alt="" />
                    <div className="book-info">
                        <p id="relatedTitle">Terrible Madness</p>
                        <p id="relatedTags">THRILLE, DRAMA, HORROR</p>
                        <div className="related-price">
                            <p id="relatedPrice">$45.4</p>
                            <p id="firstPrice">$98.4</p>
                        </div>
                        <button><i className="fa-solid fa-cart-shopping" />Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;