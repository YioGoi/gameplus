import React, { useState } from 'react'

// Styles
import './MainContentHeader.scss'

// Redux
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import {
    toogleSortState
} from '../../redux'

export default function MainContentHeader() {
    // Global State
    const sortState = useSelector(state => state.sort.sortState)
    // Local State
    const [sortDropdown, toogleSortDropdown] = useState(false)

    // Toogle Sort Dropdown
    const handleToogleDropdown = e => {
        e.stopPropagation()
        toogleSortDropdown(visible => !visible)
    }

    // Select sort
    const handleSelectSort = (e, descending) => {
        e.stopPropagation()
        store.dispatch(toogleSortState(descending))
        toogleSortDropdown(false)
    }

    return (
        <div className='main-content-header'>
            <div className='text'>
                {`Browse Games`}
            </div>

            <div className='sort'>
                <div className='sort-button' onClick={handleToogleDropdown}>
                    <span>
                        {`Title `} {sortState ? 'A-Z' : 'Z-A'}
                    </span>
                    <div className='arrow-container'>
                        {
                            !sortDropdown ?
                                <img
                                    className='arrow-down'
                                    src={process.env.PUBLIC_URL + '/icons/icon-mask.png'}
                                    srcSet={`${process.env.PUBLIC_URL + '/icons/icon-mask@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-mask@3x.png'} 3x`}
                                    alt='arrow-down'
                                />
                                :
                                <img
                                    className='arrow-up'
                                    src={process.env.PUBLIC_URL + '/icons/icons-arrow-up.png'}
                                    srcSet={`${process.env.PUBLIC_URL + '/icons/icons-arrow-up@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icons-arrow-up@3x.png'} 3x`}
                                    alt='arrow-up'
                                />
                        }

                    </div>
                </div>
                {
                    sortDropdown &&
                    <div className='sort-dropdown'>
                        <div
                            id='first'
                            className={sortState ? 'selected sort' : 'sort'}
                            onClick={e => handleSelectSort(e, true)}
                        >
                            {`Title A-Z`}
                        </div>
                        <div
                            className={!sortState ? 'selected sort' : 'sort'}
                            onClick={e => handleSelectSort(e, false)}
                        >
                            {`Title Z-A`}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
