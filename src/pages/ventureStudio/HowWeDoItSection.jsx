import React from 'react'

const HowWeDoItSection = ( { imgLink,text1, text2 } ) => {
    return (
        <div >
            <div >
                {/* Ideation  */}
                <div className='row'>
                    {/* Image  */}
                    <div className='col-12 col-md-2 pt-5'>
                        <img src={ imgLink } alt="" />
                    </div>
                    {/* Text  */}
                    <div className='col-12 col-md-10'>
                        <h2>{ text1 }</h2>
                        <p>{ text2 }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeDoItSection
