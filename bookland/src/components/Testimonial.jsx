import "../css/testimonial.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Star from "./Star";

const data = [
    {
        content: "Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much",
        img: "",
        author: "Jason Huang",
        roll: "Book Lovers",
        star: 5
    },
    {
        content: "I never know this shop before, until my grandma tell me how excelent this book store",
        img: "",
        author: "Miranda Lee",
        roll: "Book Lovers",
        star: 4
    },
    {
        content: "Shoping book in Bookland is very easy. Quick delivery and fast respon. They services is awesome!",
        img: "",
        author: "Steve Henry",
        roll: "Book Lovers",
        star: 3
    },
    {
        content: "Thank you for filling a niche at an affordable price. Your book was just what I was looking for",
        img: "",
        author: "Angela Moss",
        roll: "Book Lovers",
        star: 4
    },
]
function Testimonial() {
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
    const setting = {
        infinite: true,
        lazyload: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="testimonialsContainer">
            <p className="testimonials">Testimanials</p>
            <div className="testimonialSlice">
                <Slider {...setting}>
                    {data.map((item) => {
                        return (
                            <div className="testimonialItem">
                                <div className="testimonial-star-container">
                                    {[...Array(item.star)].map((e, i) => <Star/>)}
                                    
                                </div>
                                <p>{item.content}</p>
                                <div className="testimonial-author">
                                    <img src={item.img} alt="" />
                                    <div className="testimonial-author-stt">
                                        <span>{item.author}</span>
                                        <p>{item.roll}</p>
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
export default Testimonial;