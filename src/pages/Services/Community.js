import {Image} from "react-bootstrap";
import {HomepageNav} from "../../components/Navbar";
import sectionOneImg from "../../assets/images/BuildersCollective/sectionOneImage.jpg";
import memberShipImg from "../../assets/images/BuildersCollective/membersSection.jpg";
import memberShipImgMD from "../../assets/images/BuildersCollective/memberSectionMD.jpg";
import memberShipImgSM from "../../assets/images/BuildersCollective/memberSectionSM.jpg";
import "../../sassfiles/pages/services/_community.scss";
const Community = () => {
    return (
        <div>
            <HomepageNav />
            <HeroSection />
            <SectionOne />
            <Banner />
            <MembershipSection />
            <BecomeAPortCo />
        </div>
    );
};

const HeroSection = () => {
    return (
        <div className="px-4 container-fluid CollectiveHero d-flex pt-3 pb-4 align-items-center">
            <div className="col-lg-8 col-md-8 col-sm-12 px-lg-5 CollectiveHeroContent">
                <h1 className="d-lg-block">
                    Unlock the power of collaboration and Innovation with Builder's Collective Membership !
                </h1>
                <button className="CollectiveHeroBtn p-2 rounded-pill my-3">
                    <a href="#">Become a Member.</a>
                </button>
            </div>
        </div>
    );
};

const SectionOne = () => {
    return (
        <div className="container-fluid px-3 mx-3 my-4 whySection">
            {/* FIRST PARAGRAPH */}
            <div className="firstPar d-flex flex-lg-row flex-md-column flex-sm-column gap-4 mx-md-3">
                <div className="flex-wrap text-wrap py-2">
                    <h2 className="purple-text">WHY JOIN THE BUILDER'S COLLECTIVE?</h2>
                    <p>
                        It is an established fact that entrepreneurs do well when they are journeying with people who
                        are also buiding. Only entrepreneurs know how to support and give comfort to other entrepreneurs
                        and that is the reason why the builder's collectiive exist.
                    </p>
                </div>
                <Image src={sectionOneImg} alt="sectionOneImg" className="sectionOneImg img-fluid py-3" />
            </div>
            {/* SECOND PARAGRAPH */}
            <div className="secondPar d-flex flex-wrap py-sm-2">
                <p>
                    First and foremost, to provide that sounding board, that accountability that every entrepreneur
                    needs to continue to push until they get to their final destination. See the services that our
                    Builder's Collectives offers below and join this group of forward-thinking entrepreneurs today!
                </p>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="container-fluid px-2">
            <div className="CommunityBanner d-flex flex-column flex-wrap justify-content-center gap-1">
                <h3 className="purple-text text-center">JOIN THE 8THGEAR COMMUNITY TODAY !</h3>
                <p>
                    Join a vibrant community where entrepreneurs unite to create, innovate and elevate their ventures.
                </p>
                <button className="Banner-btn rounded-pill">Join Us Now!</button>
            </div>
        </div>
    );
};

const MembershipSection = () => {
    return (
        <div className="container my-4">
            <div className="membership d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse gap-2">
                {/* Write up */}
                <div className="membershipBody">
                    <h4 className="purple-text d-block d-lg-block d-md-none d-sm-none MembershipHeaderLG">
                        BUILDER COLLECTIVE MEMBERSHIP
                    </h4>
                    <p>
                        For a <span className="text-bold">nominal fee of 10,000 Naira</span>,you can elevate your
                        membership to become a part of the Builders Collectives. This premium membership offers a
                        plethora of additional benefits designed to accelerate your business growth:
                    </p>
                    <ul>
                        <li>
                            <p className="benefit-list">
                                <span className="text-bold"> Accountability services </span> - Monthly growth metrics
                                tracking support
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                <span className="text-bold">5% affiliate discounts across our co-working,</span> talent
                                placement and growth strategy services
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                <span className="text-bold"> Priority booking access to training rooms,</span>
                                meeting rooms, co-working and private office spaces
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                Access to ecosystem-evolving opportunities and enterprise development content
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                Opportunity to be a part of our supportive community and attend 8thGear events
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                Special in-house sessions and programs designed to accelerate your company's growth
                            </p>
                        </li>
                        <li>
                            <p className="benefit-list">
                                Support with announcements for your ventures and initiatives. B2B ventures can be listed
                                on our tech marketplace
                            </p>
                        </li>
                    </ul>
                </div>
                {/* Image */}
                <div>
                    <Image
                        src={memberShipImg}
                        alt="Membership Section"
                        className="img-fluid membershipPic d-none d-lg-block d-md-none d-sm-none"
                    />
                    <Image
                        src={memberShipImgMD}
                        alt="Membership Section"
                        className="img-fluid membershipPicMD d-none d-lg-none d-md-block d-sm-none"
                    />
                    <Image
                        src={memberShipImgSM}
                        alt="Memebership Section"
                        className="img-fluid membershipPicSM d-none d-lg-none d-md-none d-sm-block"
                    />{" "}
                    <h4 className="purple-text text-small d-block d-lg-none d-md-block d-sm-block text-center my-4">
                        BUILDER COLLECTIVE MEMBERSHIP
                    </h4>
                </div>
            </div>
        </div>
    );
};

const BecomeAPortCo = () => {
    return (
        <div className="container portCoSect py-4">
            <h2 className="purple-text text-center my-2 text-small">BECOME A PORTFOLIO COMPANY</h2>
            <div className=" portcoBody d-flex flex-lg-row flex-md-column flex-sm-column gap-3">
                <div className="PartOne gap-2">
                    <div>
                        <p>
                            For those with high-potential business ideas, 8thGear offers the opportunity to become a
                            Portfolio Company (PortCo). As a PortCo, you'll receive unparalleled support to turn your
                            idea into a thriving business.
                        </p>
                    </div>
                    <div>
                        <p>
                            8thGear operates as a corporate co-founder journeying with you ans as such, will require
                            30-90% equity in the business, depending on the level of 8thGear’s involvement and resources
                            to be contributed. This ensures that we are fully invested in your success and committed to
                            seeing your venture scale and succeed.
                        </p>
                    </div>
                    <div>
                        <p>
                            We identify problems that are pain points, develop them into solutions, spin-off as
                            ventures, and build them into great and sustainable businesses
                        </p>
                    </div>
                </div>
                <div className="partTwo gap-2">
                    <p>
                        Currently, we have 6 Portfolio Companies, 4 of which have been spun off. Our goal is to achieve
                        5 spinoffs before the end of 2024.
                    </p>
                    <p>
                        <span className="text-bold">PortCo's Include:</span>
                        <ul>
                            <li>
                                <p className="portco-list">Innkeeper Talent Accelerator</p>
                            </li>
                            <li>
                                <p className="portco-list">Haven Edu-Services</p>
                            </li>
                            <li>
                                <p className="portco-list">DigiPlus Connect Café</p>
                            </li>
                            <li>
                                <p className="portco-list">TruLance</p>
                            </li>
                            <li>
                                <p className="portco-list">Everything Meat</p>
                            </li>
                            <li>
                                <p className="portco-list">Legal Mo</p>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Community;