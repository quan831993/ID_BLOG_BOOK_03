import "../css/product-detail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
    const {id} = useParams()
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/book/${id}`)
            .then((response) => response.json())
            .then((data) => setBook(data));
    }, [id])
    console.log(book.tags);
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
                            <td className="p-info">{book.name}</td>
                        </tr>
                        <tr>
                            <td className="p">Author</td>
                            <td className="p-info">{book.author}</td>
                        </tr>
                        <tr>
                            <td className="p">ISBN</td>
                            <td className="p-info">{book.ISBN}</td>
                        </tr>
                        <tr>
                            <td className="p">Ediiton Language</td>
                            <td className="p-info">{book.editionLanguage}</td>
                        </tr>
                        <tr>
                            <td className="p">Book Format</td>
                            <td className="p-info">{book.format}</td>
                        </tr>
                        <tr>
                            <td className="p">Date Published</td>
                            <td className="p-info">{book.year}</td>
                        </tr>
                        <tr>
                            <td className="p">Publisher</td>
                            <td className="p-info">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td className="p">Tags</td>
                            <td className="p-info">
                                {book?.tags?.map((data)=> {
                                    return(
                                        <button>{data}</button>
                                    )
                                })}
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