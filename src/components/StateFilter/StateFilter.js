import React from 'react'

// Styles
import './StateFilter.scss'

export default function StateFilter() {
    return (
        <div className='state-filter-container'>
            <div className='state-filter-header'>
                <div className='state-filter-title'>
                    <span>
                        {`State`}
                    </span>
                </div>
                <div className='state-filter-icon'>
                    <img
                        className='arrow-up'
                        src={process.env.PUBLIC_URL + '/icons/icons-arrow-up.png'}
                        srcSet={`${process.env.PUBLIC_URL + '/icons/icons-arrow-up@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icons-arrow-up@3x.png'} 3x`}
                        alt='arrow-up'
                    />
                </div>
            </div>

            <div className='state-filter-check-boxes'>
                <div className='check-box first'>
                    <input type="checkbox" id="Available" name="Available" value="Available" />
                    <label htmlFor="Available"> Available</label>
                </div>

                <div className='check-box'>
                    <input type="checkbox" id="Patching" name="Patching" value="Patching" />
                    <label htmlFor="Patching"> Patching</label>
                </div>

                <div className='check-box'>
                    <input type="checkbox" id="Maintenance" name="Maintenance" value="Maintenance" />
                    <label htmlFor="Maintenance"> Maintenance</label>
                </div>
            </div>
        </div>
    )
}



