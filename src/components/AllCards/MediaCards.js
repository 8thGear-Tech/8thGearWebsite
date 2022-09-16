//GalleryCard
//GalleryMediaCards
//AllPortfoliosLogoCard
//ProjectDeliveryManagedServicesCard

// import Record from "../../data/blog.json"



// export const AllPortfoliosLogoCard = (props) =>{
//     const image = props.image;
//     return(
//         <div className="container-fluid">
//         <div style={{borderTop: "1px solid #dee2e6",borderLeft: "1px solid #dee2e6",}} className="row TextAlignCenter border-bottom-0">
//             {

//             Record && Record.map(record => {
//                 return(
//                     <div style={{borderRight: "1px solid #dee2e6",borderBottom: "1px solid #dee2e6",paddingLeft: "20px", paddingRight: "20px",}} className="col-lg-3 col-md-4 col-sm-6 col-6 px-4" key={record.id}>
//                         <img className="my-5" src={ image } alt="Logos" style={{maxWidth: "100%", maxHeigt: "40%",}} height={70}/>
//                     </div>
//                 )
//             })
// }
// </div>
//       </div>
//     )
// };

export const AllPortfoliosLogoCard = (props) => {
    const {logo} = props;
    return(
        <div>
                         <img className="my-5" src={ logo } alt="Logos" style={{maxWidth: "100%", maxHeigt: "100%",}} height={70}/>
                     </div>
    )
};

export const ProjectDeliveryManagedServicesCard = (props) =>{
    const {image, text, id} = props;
    return(                             
            <div key={id} className="col-lg-3 col-md-6 col-sm-12" style={{height: "400px",backgroundSize: "cover",backgroundImage: "url(" + image + ")",}}>
                 <p className='ProjectDeliveryManagedServicesCardText TextAlignCenter'>{text}</p> 
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
 