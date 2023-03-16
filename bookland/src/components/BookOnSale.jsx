import "../css/bookOnSale.css";
// import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const bookSale = [
    {
        sale: "40%",
        title: "Take Out Tango",
        tags: "SPORTS, DRAMA",
        rate: "6.8",
        price: "$56.4",
        originPrice: "$98.4",
        img: "",
    },
    {
        sale: "50%",
        title: "The Missadventure of..",
        tags: "ADVANTURE, SURVIVAL",
        rate: "4.7",
        price: "$45.4",
        originPrice: "$98.4",
        img: "",
    },
    {
        sale: "50%",
        title: "Seconds [PART 1]",
        tags: "THRILLE, DRAMA, HORROR",
        rate: "6.5",
        price: "$45.4",
        originPrice: "$98.4",
        img: "",
    },
    {
        sale: "50%",
        title: "The Missadventure of..",
        tags: "ADVANTURE, SURVIVAL",
        rate: "4.7",
        price: "$45.4",
        originPrice: "$98.4",
        img: "",
    },
    {
        sale: "30%",
        title: "Terrible Madness",
        tags: "THRILLE, DRAMA, HORROR",
        rate: "4.7",
        price: "$45.4",
        originPrice: "$98.4",
        img: "",
    },
    {
        sale: "50%",
        title: "Battle Drive",
        tags: "THRILLE, DRAMA, HORROR",
        rate: "4.7",
        price: "$45.4",
        originPrice: "$98.4",
        img: "",
    }
]
function BookOnSale() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    // const [content, setContent] = useState(0);

    const setting = {
        infinite: true,
        lazyload: true,
        dots: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    };
    return (
        <div className="bookOnSaleContainer">
            <p className="bookOnSale">Book On Sale</p>
            <div className="bookSale">

                <Slider {...setting}>
                    {bookSale.map((item, index) => {
                        return (
                            <div className="booksSale">
                                <img src={item.img} alt="" />
                                <div className="sale-price">{item.sale}</div>
                                <p>{item.title}</p>
                                <span>{item.tags}</span>
                                <div className="book-sale-footer">
                                    <div className="sale-left">
                                        <i class="fa-solid fa-star"></i>
                                        <p>{item.rate}</p>
                                    </div>
                                    <div className="sale-right">
                                        <p>{item.price}</p>
                                        <span>{item.originPrice}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>


            </div>
        </div>
    )
}
export default BookOnSale;