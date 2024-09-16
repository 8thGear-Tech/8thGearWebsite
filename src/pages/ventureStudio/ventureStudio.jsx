import React from 'react'
import Hero from './Hero'
import CoreServices from './coreServices'
import HowWeDoIt from './howWeDoIt'
import ImpactMetrics from './impactMetrics'
import PortfolioCompanies from './PortfolioCompanies'


const VentureStudio = () => {
    return (
        <div className='venture-studio'>
            <div>
                <Hero />
            </div>
            <div className='text-center my-5 px-3'>
                <h3>WHAT WE DO</h3>
                <p>At our venture studio, we create enterprises with sustainable business strategies. We prioritize engaging with potential clients from start and throughout the business lifecycle. Years of iterative learning have honed ability to identity the conditions that increase the chances of an idea’s success.
                    Our in-house team of experts are ready to turn ideas into viable businesses.</p>
            </div>
            <div className='mx-5'>
                <CoreServices />
            </div>
            <div>
                <HowWeDoIt />
            </div>
            <div>
                <ImpactMetrics />
            </div>
            <div>
                <PortfolioCompanies />
            </div>
        </div>
    )
}

export default VentureStudio
