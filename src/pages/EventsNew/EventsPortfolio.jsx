import React from 'react'

const EventsPortfolio = () => {
  return (
    <div className='eventsCalendar d-flex flex-column'>
        <div className="eventsHead d-flex justify-content-center align-items-center">
            <h3 className="fw-semibold py-4">Exclusive to the Portfolio</h3>
        </div>
        <div className='container portfolio'>
            <div className='row'>
                <div className='col-6'>
                    <h3>Our Exclusivity</h3>
                    <p className='pe-3'>Our premium offerings are tailored to meet the unique needs of a select few who demand the very best. With a focus on personalized attention and exceptional quality, we deliver bespoke solutions that cater to the distinct requirements of our esteemed clients. From personalized consultations to tailored support, every aspect of our service is carefully crafted to exceed the expectations of those who value excellence.</p>
                </div>
                <div className='col'>
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Founders Meetup</h5>
                            <p className="card-text py-3">Entrepreneurship is more successful and fulfilling when traveled with like-minded individuals, fostering synergy, inspiration, motivation, and growth.</p>
                            <a href="#" className="btn ">Read more</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                <div className="card text-center mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Demo Day</h5>
                            <p className="card-text py-3">Founders Meetup Entrepreneurship is more successful and fulfilling when traveled with like-minded individuals, fostering synergy, inspiration, motivation, and growth.</p>
                            <a href="#" className="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsPortfolio
