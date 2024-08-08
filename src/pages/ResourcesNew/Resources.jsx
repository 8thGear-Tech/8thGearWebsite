import NewNavbar from "./NewNavbar"
import ResourcesContent from "./ResourcesContent"

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
                    <div className="container text-center align-self-center  justify-content-center position-relative top-50">
                        <h1 className="text-white fw-semibold fs-2 lh-sm ">Fuel Your Venture’s <span className="text-warning">Success</span> </h1>
                        <p className="text-white fw-normal fs-6 lh-sm">Unlock the potential of your venture with curated knowledge and practical tools</p>
                    </div>
                </div>
            </div>
            <div>
                <ResourcesContent />
            </div>

        </div>
    )
}