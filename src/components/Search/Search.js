import React from 'react'

// Styles
import './Search.scss'

// Redux
import store from '../../redux/store'
import {
    storeMainData
} from '../../redux'

// Dummy Data
import { dummyData } from '../../data/dummyData'

export default function Search() {

    const handleSearchChange = e => {
        e.stopPropagation()
        let value = e.target.value
        if(value !== '') {
            const filtered = dummyData.filter(data => data.title.toLowerCase().includes(value.toLowerCase()))
            store.dispatch(storeMainData(filtered))
        } else {
            store.dispatch(storeMainData(dummyData))
        }
    }

    return (
        <>
        <div className='search-container'>
            <div className='icon'>
                <img
                    className='search'
                    src={process.env.PUBLIC_URL + '/icons/combined-shape.png'}
                    srcSet={`${process.env.PUBLIC_URL + '/icons/combined-shape@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/combined-shape@3x.png'} 3x`}
                    alt='search'
                />
            </div>
            <div className='input-container'>
                <input type="text" id="input" name="input" placeholder='Search Games' onChange={handleSearchChange} />
            </div>
        </div>
        </>
    )
}
