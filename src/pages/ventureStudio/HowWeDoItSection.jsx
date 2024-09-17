import React from 'react'

const HowWeDoItSection = ( { imgLink,text1, text2 } ) => {
    return (
        <div >
            <div >
                {/* Ideation  */}
                <div className='row'>
                    {/* Image  */}
                    <div className='col-12 col-md-2 pt-1 pt-md-3'>
                        <img src={ imgLink } alt="" style={{ width:'5rem', height: '5rem' }}/>
                    </div>
                    {/* Text  */}
                    <div className='col-12 col-md-10'>
                        <h2 className='fs-2 py-2 py-md-0'>{ text1 }</h2>
                        <p className='fs-6'>{ text2 }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeDoItSection
