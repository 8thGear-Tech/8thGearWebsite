import React from 'react'
import image from "./img/image 1.png"

const Image = () => {
  return (
    <div className='w-75 mx-auto mt-5'>
      <img src={image} class="img-fluid" alt="Who Are We"></img>
    </div>
  )
}

export default Image