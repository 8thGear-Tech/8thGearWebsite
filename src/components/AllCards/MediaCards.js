//GalleryCard
//GalleryMediaCards
//AllPortfoliosLogoCard
//ProjectDeliveryManagedServicesCard

import Record from "../../data/blog.json"
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json"
import logo from "../../assets/images/Physiology2.jpg"


export const AllPortfoliosLogoCard = () =>{
    return(
        <>
        <div className="row">
            {

            Record && Record.map(record => {
                return(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={record.id}>
                        <img src={ record.logo } alt="Logos" className="bg-logo1"/>
                    </div>
                )
            })
}
</div>
        </>
    )
};

export const ProjectDeliveryManagedServicesCard = () =>{
    return(
        <div className='row'>

{

Data && Data.map(data => {
    return(                                                                                                              
            <div className='col-lg-3 col-md-6 col-sm-12' key={data.id}><div className="bg-pic1 col-12" style={{backgroundImage: "url(" + data.image + ")",}}> <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>{data.text}</p> </div> </div>
    )
})
}
       </div>
        )
};

{/* <div className='bg-logo1 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo2 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo3 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo4 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo1 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo2 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo3 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo4 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo1 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo2 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo3 col-lg-3 col-md-4 col-sm-6 col-6'></div>
           <div className='bg-logo4 col-lg-3 col-md-4 col-sm-6 col-6'></div> */}


           {/* <div className='col-lg-3 col-md-6 col-sm-12'><div className="bg-pic1 col-12"> <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>ENTERPRISE SUPPORT</p> </div> </div>
           <div className='col-lg-3 col-md-6 col-sm-12'><div className="bg-pic2 col-12"> <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>ECOSYSTEM EVENTS</p> </div></div>
           <div className='col-lg-3 col-md-6 col-sm-12'><div className="bg-pic3 col-12"> <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>TRAINING</p> </div></div>
           <div className='col-lg-3 col-md-6 col-sm-12'><div className="bg-pic4 col-12"> <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>EMPLOYABILITY</p> </div></div> */}
 