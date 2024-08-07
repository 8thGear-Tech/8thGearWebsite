import NewNavbar from "./NewNavbar"

export default function ResourcesNew() {
    return (
        <div className="relative">
            <div>
                <NewNavbar />
            </div>
            <div style={{ height: '80px' }}></div> {/* Spacer div */}
            <div className="">
                <div
                    className="hero-section relative"
                    style={{
                        backgroundImage: 'url(/images/resourcesNew/resources_hero.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '',
                    }}
                >
                    <div className="container ">
                        <h1 className="text-white">Your Hero Title</h1>
                        <p className="text-white">Your Hero Subtitle</p>
                    </div>
                </div>
            </div>

        </div>
    )
}