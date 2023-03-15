import "../css/book-container.css"

const book = [
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "The Missadventure of David",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    },
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "All Good News",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    },
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "Thunder Stunt",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    },
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "Terrible Madness",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    },
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "Such a Fun Age",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    },
    {
        tag: "ADVANTURE, SCIENCE, COMEDY",
        title: "Battle Drive",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Kevin Smiley",
        publisher: "Printarea Studios",
        year: "2019",
        point: "4.0",
        review: "235 Reviews",
        price: "$ 54.78",
        orriginPrice: "$70.00",
    }
]
function BookContainer() {

    return (
        <>
            {book.map((item) => {
                return (
                    <div className="book-container">
                        <img src alt="" />
                        <div className="book-info">
                            <p className="book-tags">{item.tag}</p>
                            <p className="book-title">{item.title}</p>
                            <p className="summary">{item.summary}</p>
                            <div className="book-footer">
                                <div className="written">
                                    <p>Writen by</p>
                                    <span>{item.author}</span>
                                </div>
                                <div className="Publish">
                                    <p>Publisher</p>
                                    <span>{item.publisher}</span>
                                </div>
                                <div className="year">
                                    <p>Year</p>
                                    <span>{item.year}</span>
                                </div>
                                <div className="rate">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" id="star5" />
                                </div>
                                <div className="point">
                                    <p>{item.point}</p>
                                    <span>{item.review}</span>
                                </div>
                            </div>
                        </div>
                        <div className="book-right">
                            <div className="sale-container">
                                <button>Get 20% Discount for today</button>
                                <button>50% OFF Discount</button>
                                <button id="see2">See 2+ promos</button>
                            </div>
                            <div className="price-container">
                                <p>{item.price}</p>
                                <span>{item.orriginPrice}</span>
                            </div>
                            <div className="add-to-cart-container">
                                <button className="add-to-cart-btn"><i className="fa-solid fa-cart-shopping" /> Add to cart</button>
                                <button className="like-btn"><i className="fa-regular fa-heart" /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default BookContainer;