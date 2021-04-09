import React from 'react'

// Styles
import './GenreFilter.scss'

export default function GenreFilter() {

    const filtersArray = [
        {
            text: 'Shooters'
        },
        {
            text: 'Action'
        },
        {
            text: 'RPG'
        },
        {
            text: 'Racing'
        },
        {
            text: 'MOBA/MMO'
        },
        {
            text: 'Simulation'
        },
        {
            text: 'Strategy'
        },
        {
            text: 'Sports'
        },
        {
            text: 'Kids/Family'
        },
        {
            text: 'Casual'
        },
        {
            text: 'Demo'
        },
        {
            text: 'Horror'
        },
        {
            text: 'Platformer'
        },
        {
            text: 'Battle Royale'
        },
        {
            text: 'Adventure'
        },
        {
            text: 'Open World'
        }
    ]

    return (
        <div className='genre-filter-container'>
            <div className='genre-filter-header'>
                <div className='genre-filter-title'>
                    <span>
                        {`Genre Filters`}
                    </span>
                </div>
                <div className='genre-filter-icon'>
                    <img
                        className='arrow-up'
                        src={process.env.PUBLIC_URL + '/icons/icons-arrow-up.png'}
                        srcSet={`${process.env.PUBLIC_URL + '/icons/icons-arrow-up@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icons-arrow-up@3x.png'} 3x`}
                        alt='arrow-up'
                    />
                </div>
            </div>

            <div className='genre-filter-check-boxes'>
                {
                    filtersArray.map((filter, index) => (
                        <div className={index === 0 ? 'check-box first' : 'check-box'} key={index}>
                            <input type="checkbox" id={filter.text} name={filter.text} value={filter.text} />
                            <label htmlFor={filter.text}> {filter.text}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
