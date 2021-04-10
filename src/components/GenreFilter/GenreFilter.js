import React, { useEffect } from 'react'

// Styles
import './GenreFilter.scss'

// Redux
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import { 
    setCheckedGenres,
    storeMainData
} from '../../redux'

// Dummy Data
import { dummyData } from '../../data/dummyData'

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

export default function GenreFilter() {
    // Global State
    const checkedGenresArray = useSelector(state => state.filter.checkedGenresArray)

    // Match checked genres and set data
    useEffect(() => {
        if(checkedGenresArray.length > 0) {
            let newData = []
            dummyData.forEach(data => {
                checkedGenresArray.forEach(checked => {
                    let isMatched = data.genres.some(genre => genre === checked)
                    if(isMatched) {
                        newData.push(data)
                    }
                })
            })
            store.dispatch(storeMainData(newData))
        } else {
            // If no checked genres then show all
            store.dispatch(storeMainData(dummyData))
        }
    }, [checkedGenresArray])
    

    const handleOnChange = e => {
        e.stopPropagation()
        let obj = {
            text: e.target.value,
            checked: e.target.checked
        }
        store.dispatch(setCheckedGenres(obj))
    }

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
                            <input type="checkbox" id={filter.text} name={filter.text} value={filter.text} onChange={handleOnChange} />
                            <label htmlFor={filter.text}> {filter.text}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
