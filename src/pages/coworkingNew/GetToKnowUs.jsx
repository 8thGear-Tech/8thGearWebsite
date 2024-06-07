import Card from "./Cards";
import './getToKnowUs.css'

export const GetToKnowUs = () => {

    return (
        <div className="get-to-know-us d-flex flex-column gap-4 justify-content-center py-4">
            {/* Title  */}
            <div className="text-center p-4">
                <h3 className="fw-semibold">GET TO KNOW US</h3>
                <p className="fw-normal">The Gears You Need</p>
            </div>
            {/* Cards row 1  */}
            <div className="container d-flex gap-4 justify-content-center ">
                <div className="row gy-4 d-flex justify-content-center">
                    {/* Card 1  */}
                    <div className="col-12 col-md-6 " >
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card 2 */}
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>} />
                    </div>

                </div>
            </div>

            {/* Cards row 2  */}
            <div className="container d-flex gap-4 justify-content-center ">
                <div className="row gy-4 d-flex justify-content-center">
                    {/* Card 1  */}
                    <div className="col-12 col-md-6 " >
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card 2 */}
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>} />
                    </div>

                </div>
            </div>
            

            {/* Cards row 3  */}
            <div className="container d-flex gap-4 justify-content-center ">
                <div className="row gy-4 d-flex justify-content-center">
                    {/* Card 1  */}
                    <div className="col-12 col-md-6 " >
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card 2 */}
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>} />
                    </div>

                </div>
            </div>
            
            {/* Cards row 4  */}
            <div className="container d-flex gap-4 justify-content-center ">
                <div className="row gy-4 d-flex justify-content-center">
                    {/* Card 1  */}
                    <div className="col-12 col-md-6 " >
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card 2 */}
                        <Card imgSrc={'/images/coworkingNew/alarm.svg'} text={<span>Monday-Friday (9am-5pm) <br /> Saturdays (10am-5pm)</span>} />
                    </div>

                </div>
            </div>
            
        </div>
    )
}
