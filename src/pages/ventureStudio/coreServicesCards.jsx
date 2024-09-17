import { FaShop } from "react-icons/fa6";
import { IoCodeOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";


import "./ventureStudio.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CoreServicesCards() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        centerPadding: "10px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        rtl: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <div className="">
                <Slider {...settings}>
                    <div className="coreServiceCard">
                        <FaShop className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Go-To-Market Strategy</h6>
                    </div>
                    <div className="coreServiceCard">
                        <IoCodeOutline className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Visual & UX Design</h6>
                    </div>

                    <div className="coreServiceCard">
                        <MdOutlineEngineering className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Engineering</h6>
                    </div>
                    <div className="coreServiceCard">
                        <SiSimpleanalytics className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Business Analytics</h6>
                    </div>
                    <div className="coreServiceCard">
                        <FaBuildingColumns className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Company Formation</h6>
                    </div>
                    <div className="coreServiceCard">
                        <MdOutlineAttachMoney className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Finance</h6>
                    </div>
                    <div className="coreServiceCard">
                        <IoMdSettings className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Operations</h6>
                    </div>
                    <div className="coreServiceCard">
                        <IoIosPeople className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Legal & HR</h6>
                    </div>
                    <div className="coreServiceCard">
                        <MdGroupAdd className="coreServiceCardsIcon py-2" />
                        <hr />
                        <h6 className="p-3">Recruiting</h6>
                    </div>
                </Slider>
            </div>

        </div>
    )
}


