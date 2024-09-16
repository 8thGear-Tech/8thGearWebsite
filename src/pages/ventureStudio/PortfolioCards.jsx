import React from 'react'

const PortfolioCards = ({ imgLink, headText, p1, ps1, ps2, ps3 }) => {

    return (
        <div className='ventureCard'>
            <div className='py-2'>
                <img src={imgLink} alt="" style={{ width: '8rem', height: '8rem' }} />
            </div>
            <div className='text-start px-4'>
                <h4 className='pt-4 pb-1 fs-4'>{headText}</h4>
                <p className='fw-light'>{p1}</p>
                <div className='row'>
                    <p className='col-6'>{ps1}</p>
                    <p className='col-6'>{ps2}</p>
                    <p className='col-6'>{ps3}</p>
                </div>
            </div>

        </div>
    )
}

export default PortfolioCards
