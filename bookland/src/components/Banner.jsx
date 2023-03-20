import "../css/banner.css"
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../slide/banner.slide";
import {useDispatch, useSelector} from "react-redux";

function Banner() {
const dispatch = useDispatch();


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

    const [content, setContent] = useState(0);

    const setting = {
        infinite: true,
        lazyload: true,
        dots: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setContent(next),
    };
    useEffect(() => {
        dispatch(fakeData())
    }, [])


const book= useSelector((state)=>{
   return state.banner.value
})
    return (
        <div className="banner">
            <p className="rcmt">Recommended For You</p>
            <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
            <div className="sliceCenter">
                <Slider className="slide-component" {...setting}>
                    {book.map((item, index) => {
                        return (
                            <div className={index === content ? "slide activeSlide" : "slide"}>
                                <div className="gallery-cell" key={index}>
                                    <Link to={`/detail/${item.id}`}>
                                        <img src={item.img} alt={item.img} />
                                    </Link>
                                    <p className="galleryTitle">{item.name}</p>
                                    <p className="galleryPrice">${item.price}</p>
                                    <button><span><i className="fa-solid fa-cart-shopping" /> Add to cart</span></button>
                                </div>
                            </div>

                        )
                    })}
                </Slider>

            </div>
        </div>





    )
}
export default Banner;