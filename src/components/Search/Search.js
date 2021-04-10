import React, { useState } from 'react'

// Styles
import './Search.scss'

// Redux
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import {
    storeMainData,
    setSearchValue
} from '../../redux'

// Dummy Data
import { dummyData } from '../../data/dummyData'

export default function Search() {
    // Global State
    const searchValue = useSelector(state => state.data.searchValue)
    // Local State
    const [searchDropdown, setSearchDropdown] = useState(false)
    const [localDataList, setLocalDataList] = useState(null)

    // Find games start with the letters searched
    const handleSearchChange = e => {
        e.stopPropagation()
        let value = e.target.value
        store.dispatch(setSearchValue(value))
        if (value !== '') {
            const filtered = dummyData.filter(data => data.title.toLowerCase().startsWith(value.toLowerCase()))
            setLocalDataList(filtered)
            if(filtered.length > 0) {
                setSearchDropdown(true)
            } else {
                setSearchDropdown(false)
            }
        } else {
            setSearchDropdown(false)
            store.dispatch(storeMainData(dummyData))
        }
    }

    // Click and view the searched game
    const handleSearchItemClick = (e, item) => {
        e.stopPropagation()
        let selectedItem = dummyData.find(data => data.id === item.id)
        store.dispatch(storeMainData([selectedItem]))
        store.dispatch(setSearchValue(selectedItem.title))
        setSearchDropdown(false)
    }

    // Clear search
    const handleClear = e => {
        e.stopPropagation()
        store.dispatch(setSearchValue(''))
        store.dispatch(storeMainData(dummyData))
        setSearchDropdown(false)
    }

    return (
        <div className='search-container'>
            <div className='search-and-icons'>
                <div className='icon'>
                    <img
                        className='search'
                        src={process.env.PUBLIC_URL + '/icons/combined-shape.png'}
                        srcSet={`${process.env.PUBLIC_URL + '/icons/combined-shape@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/combined-shape@3x.png'} 3x`}
                        alt='search'
                    />
                </div>
                <div className='input-container'>
                    <input type="text" id="input" name="input" placeholder='Search Games' value={searchValue || ''} onChange={handleSearchChange} />
                </div>

                {
                    searchValue !== '' &&
                    <div className='clear-icon'>
                        <img
                            className='clear'
                            onClick={handleClear}
                            src={process.env.PUBLIC_URL + '/icons/x.png'}
                            srcSet={`${process.env.PUBLIC_URL + '/icons/x@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/x@3x.png'} 3x`}
                            alt='clear'
                        />
                    </div>
                }

            </div>

            {
                searchDropdown &&
                <div className='search-dropdown'>
                    {
                        localDataList && localDataList.map((item, index) => {
                            return (
                                <div className='search-item' key={index} onClick={e => handleSearchItemClick(e, item)}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
