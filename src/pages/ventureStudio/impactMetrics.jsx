import React from 'react'
import Button from './Button'

const ImpactMetrics = () => {
    return (
        <div className='text-center w-75 mx-auto'>
            <h3 className='py-3'>IMPACT METRICS</h3>
            <div className='row'>
                <div className='col-6 col-sm-3'>
                    <h2>75%</h2>
                    <p>Have Female Co-owners</p>
                </div>
                <div className='col-6 col-sm-3'>
                    <h2>240</h2>
                    <p>Mentorship Hours</p>
                </div>
                <div className='col-6 col-sm-3'>
                    <h2>12</h2>
                    <p>Portfolio Businesses</p>
                </div>
                <div className='col-6 col-sm-3'>
                    <h2>20</h2>
                    <p>Jobs Created</p>
                </div>
            </div>
            <div>
                <Button buttonText={"Transform Your Idea"}/>
            </div>
        </div>
    )
}

export default ImpactMetrics
