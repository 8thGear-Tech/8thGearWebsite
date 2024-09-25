import React from 'react'

const PortfolioCards = ({ imgLink, headText, p1, ps1, ps2, ps3 }) => {

    return (
        <div className='ventureCard'>
            <div className='py-1'>
                <img src={imgLink} alt=""  />
            </div>
            <div className='text-start px-4'>
                <h4 className='pt-4 pb-1 fs-4'>{headText}</h4>
                <p className='fw-light'>{p1}</p>
                <div className="row">
                    <div className="col-6">
                        <p className="portco-tag">{ps1}</p>
                    </div>
                    <div className="col-6">
                        <p className="portco-tag">{ps2}</p>
                    </div>
                    <div className="col-6">
                        <p className="portco-tag">{ps3}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioCards
