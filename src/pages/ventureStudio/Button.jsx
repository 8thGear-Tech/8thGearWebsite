import React from 'react'
import "./ventureStudio.css"

const Button = ({buttonText}) => {
  return (
    <div>
      <button className='btn ventureStudioBtn'>{buttonText}</button>
    </div>
  )
}

export default Button
