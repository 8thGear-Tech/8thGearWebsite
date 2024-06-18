// import HeroOffcanvas from "./Navbar"
import HeroCarousel from './Carousel'
import { Navbar28 } from "../../components/Navbar";




export const Hero = () => {
    return (
        <div className="hero text-center position-relative">
            <HeroCarousel />
            <Navbar28 />
            {/* <HeroOffcanvas className="position-absolute top-0 start-0 w-100" /> */}
        </div>
    );
}
