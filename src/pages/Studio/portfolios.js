import { AllPortfoliosLogoCard } from "../../components/AllCards/MediaCards";
import Data from "../../data/PortfolioLogos.json";

const PortfolioPage = () => {
    return (
        <div className="container-fluid">
         <div style={{borderTop: "1px solid #dee2e6",borderLeft: "1px solid #dee2e6",}} className="row TextAlignCenter border-bottom-0">
            {Data.PortfolioLogos.map((PortfolioLogo) => {
                return(
                    <div style={{borderRight: "1px solid #dee2e6",borderBottom: "1px solid #dee2e6",paddingLeft: "20px", paddingRight: "20px",}} className="col-lg-3 col-md-4 col-sm-6 col-6 px-4" key={PortfolioLogo.id}>
                     <AllPortfoliosLogoCard {...PortfolioLogo}/>
                     </div>
                )

            })}
         </div>
         </div>
    )
}
export default PortfolioPage;