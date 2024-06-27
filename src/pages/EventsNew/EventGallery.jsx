import React from 'react'

const EventGallery = () => {
  return (
    <div className='eventsCalendar d-flex flex-column'>
      <div className="eventsHead d-flex justify-content-center align-items-center">
            <h3 className="fw-semibold py-4">Gallery</h3>
        </div>
        <div className='gallery container'>
            <div className='row'>
                <div className='col-12 col-md-6'></div>
                <div className='col-12 col-md-6'>
                    <p>
                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <a href="#" className="btn ">Explore</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default EventGallery
