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
    const cardData = [
        {
            icon: FaShop,
            text: "Go-To-Market Strategy",
        },
        {
            icon: IoCodeOutline,
            text: "Visual & UX Design",
        },
        {
            icon: MdOutlineEngineering,
            text: "Engineering",
        },
        {
            icon: SiSimpleanalytics,
            text: "Business Analytics",
        },
        {
            icon: FaBuildingColumns,
            text: "Company Formation",
        },
        {
            icon: MdOutlineAttachMoney,
            text: "Finance",
        },
        {
            icon: IoMdSettings,
            text: "Operations",
        },
        {
            icon: IoIosPeople,
            text: "Legal & HR",
        },
        {
            icon: MdGroupAdd,
            text: "Recruiting",
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="m-auto slider-container">
            <Slider {...settings}>
                {cardData.map((d) => (
                    <div className="coreServiceCard mx-3">
                        <div className="h-50 text-center pt-4">
                            <d.icon className="coreServiceCardsIcon" />
                        </div>
                        <hr />
                        <div className="h-50 text-center">
                            <p>{d.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


