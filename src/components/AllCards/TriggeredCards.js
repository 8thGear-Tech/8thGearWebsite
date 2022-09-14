//ProjectDeliveryManagedServicesOnHoverCard
//ProjectDeliveryPopUpCard
//8thgeariansPopUpCard
//EIRDataPopUpCard
//AdvisoryBoardOnHoverCard

import Image  from "../../assets/images/TeamImage.jpg"
import logo from "../../assets/images/logo.png"
import link from "../../assets/images/LinkedIn_icon.png"

export const EightgeariansPopUpCard = () => {
    return (
        <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  View more
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="d-flex justify-content-between mx-4 my-2">
        <img src={logo} width={50} id="staticBackdropLabel"/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
    <div className="cards">
            <img src={Image} className="w-25 mb-4" alt="..."/>
            <h4>DAMILOLA OBIDAIRO</h4>
            <h6 className="">CO- FOUNDER</h6>
            <div className="card-body">
                <p className="card-text mb-4">dolor in reprehenderit in voluptate velit esse, 
                cillum dolore eu fugiat nulla dolor in reprehenderit in voluptate 
                velit essecillum dolore eu fugiat nulla reprehenderit in</p>
            </div>
            <img src={link} className="mb-4" width={25}/>
        </div>
        </div>
        </div>
    </div>
                
    
</>
    )
    
}




export const EIRDataPopUpCard = () => {
  return (
      <>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
View more
</button>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
  <img src={Image} className="w-100 mb-4" alt="..."/>
  <div className="card-img-overlay">
    <div className="d-flex justify-content-between mx-1 my-1">
      <img src={logo} width={40} className="modal-title" id="staticBackdropLabel"/>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    </div>
    
  <div className="cards">
          
          <br></br>
          <h4 className="">DAMILOLA OBIDAIRO <img src={link} className="" width={25}/></h4>
          <h6 className="">CO- FOUNDER</h6>
          <div className="card-body">
              <p className="card-text mb-4">dolor in reprehenderit in voluptate velit esse, cillum dolore eu fugiat nulla dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse.
dolor in reprehenderit in voluptate velit esse, cillum dolore eu fugiat nulla dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse.
dolor in reprehenderit in voluptate velit esse, cillum dolore eu fugiat nulla dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse.</p>
          </div>
      </div>
      </div>
      </div>
  </div>
              
  
</>
  )
  
}

export const AdvisoryBoardOnHoverCard = () => {
  return (
    <>
{/* <div class="view overlay">
    <img src={Image} class="img-fluid " alt=""/>
    <div class="mask flex-center rgba-red-strong">
        <p class="white-text">Strong overlay</p>
    </div>
</div> */}

<div className="AdvisoryBoardOnHover col-2 h-25" style={{color:"white", backgroundImage:'url('+Image+')', backgroundSize:"cover", width:"200px", height:"200px", fontSize:"30px",}}>
Strong overlay
</div>
      </>
    )
}
