import { ProjectDeliveryManagedServicesCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/ProjectDeliveryManagedServicesCardMap.json";

const ManagedServicesPage = () =>{
    return(
        <div className="container-fluid">
            <div className='row'>
                {Data.ManagedServicesImages.map((ManagedServicesImage) => {
                    return(
                        
                            <ProjectDeliveryManagedServicesCard {...ManagedServicesImage}/>
                        
                    )
                })}

            </div>
        </div>
    )
};
export default ManagedServicesPage;