
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function HeroCarousel() {
    return (
        <Carousel controls={false} indicators={true} className='carousel'>
            <Carousel.Item >
                <div className="d-block w-100" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    textAlign: 'left',
                }}>
                    <h3>Coworking</h3>
                    <p>Unlock your full potential in a vibrant coworking space. <br />Surround yourself with motivated individuals and <br /> watch your ideas soar!</p>
                    <div className="d-flex gap-2 py-2 buttons">
                        <Button>
                            <span className="px-2">
                                <img src="/images/coworkingNew/space.svg" alt="" className="h-2" />
                            </span>
                            Book a Space
                        </Button>
                        <Button>
                            <span>
                                <img src="/images/coworkingNew/microscope.png" alt="" />
                            </span>
                            Book a Session
                        </Button>
                    </div>

                    <img src="/images/coworkingNew/slide1.png" alt="Overlay" className="overlay-image" />
                    <img src="/images/coworkingNew/slide2.png" alt="Overlay2" className="overlay-image2" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    textAlign: 'left',
                    color: 'white'
                }}>
                    <h3>Podcast</h3>
                    <p>Step into the world of podcasting with our state-of-the-art studio. <br />From professional equipment to a comfortable atmosphere, <br />we provide everything you need to bring your podcast to life.</p>
                    <div className="d-flex gap-2 py-2 buttons">
                        <Button>
                            <span className="px-2">
                                <img src="/images/coworkingNew/space.svg" alt="" className="h-2" />
                            </span>
                            Book a Space
                        </Button>
                        <Button>
                            <span>
                                <img src="/images/coworkingNew/microscope.png" alt="" />
                            </span>
                            Book a Session
                        </Button>
                    </div>

                    <img src="/images/coworkingNew/slide2.png" alt="Overlay" className="overlay-image" />
                    <img src="/images/coworkingNew/slide3.png" alt="Overlay" className="overlay-image2" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide3.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    textAlign: 'left',
                }}>
                    <h3>Coworking</h3>
                    <p>Looking for the perfect work environment? <br />Our coworking spaces offer the ideal blend of productivity & community. <br /> Experience the power of collaboration!</p>
                    <div className="d-flex gap-2 py-2 buttons">
                        <Button>
                            <span className="px-2">
                                <img src="/images/coworkingNew/space.svg" alt="" className="h-2" />
                            </span>
                            Book a Space
                        </Button>
                        <Button>
                            <span>
                                <img src="/images/coworkingNew/microscope.png" alt="" />
                            </span>
                            Book a Session
                        </Button>
                    </div>

                    <img src="/images/coworkingNew/slide3.png" alt="Overlay" className="overlay-image" />
                    <img src="/images/coworkingNew/slide4.png" alt="Overlay2" className="overlay-image2" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100" style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 2)),url(/images/coworkingNew/slide4.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    textAlign: 'left',
                }}>
                    <h3>Podcast</h3>
                    <p>Unleash your creativity in our podcast studio. <br />With top-notch recording equipment  <br /> and a dedicated space for your ideas to flourish.</p>
                    <div className="d-flex gap-2 py-2 buttons">
                        <Button>
                            <span className="px-2">
                                <img src="/images/coworkingNew/space.svg" alt="" className="h-2" />
                            </span>
                            Book a Space
                        </Button>
                        <Button>
                            <span>
                                <img src="/images/coworkingNew/microscope.png" alt="" />
                            </span>
                            Book a Session
                        </Button>
                    </div>

                    <img src="/images/coworkingNew/slide4.png" alt="Overlay" className="overlay-image" />
                    <img src="/images/coworkingNew/slide1.png" alt="Overlay2" className="overlay-image2" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;
