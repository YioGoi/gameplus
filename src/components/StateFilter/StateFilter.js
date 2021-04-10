import React, { useState, useEffect } from 'react'

// Styles
import './StateFilter.scss'

// Redux
import store from '../../redux/store'
import {
    storeMainData
} from '../../redux'

// Dummy Data
import { dummyData } from '../../data/dummyData'

export default function StateFilter() {
    // Local State
    const [patchingChecked, setPatchingChecked] = useState(false)
    const [availableChecked, setAvailableChecked] = useState(false)
    const [maintenanceChecked, setMaintenanceChecked] = useState(false)
    const [stateFilterMenuVisible, setStateFilterMenuVisible] = useState(true)

    useEffect(() => {
        let newData = []
        let filteredPatching = []
        let filteredAvailable = []
        let filteredMaintenance = []

        if (patchingChecked) {
            filteredPatching = dummyData.filter(data => data.status === 'PATCHING')
        }

        if (availableChecked) {
            filteredAvailable = dummyData.filter(data => data.status === 'AVAILABLE')
        }

        if (maintenanceChecked) {
            filteredMaintenance = dummyData.filter(data => data.status === 'MAINTENANCE')
        }

        newData = [...filteredAvailable, ...filteredMaintenance, ...filteredPatching]

        // If no state filter checked show all data
        if (!patchingChecked && !availableChecked && !maintenanceChecked) {
            newData = [...dummyData]
        }

        store.dispatch(storeMainData(newData))
    }, [patchingChecked, availableChecked, maintenanceChecked])

    const handleAvailableChecked = e => {
        e.stopPropagation()
        setAvailableChecked(e.target.checked)
    }

    const handlePatchingChecked = e => {
        e.stopPropagation()
        setPatchingChecked(e.target.checked)
    }

    const handleMaintenanceChecked = e => {
        e.stopPropagation()
        setMaintenanceChecked(e.target.checked)
    }

    const handleCollapse = e => {
        e.stopPropagation()
        setStateFilterMenuVisible(visible => !visible)
    }

    return (
        <div className='state-filter-container'>
            <div className='state-filter-header'>
                <div className='state-filter-title'>
                    <span>
                        {`State`}
                    </span>
                </div>
                <div className='state-filter-icon' onClick={handleCollapse}>
                    {
                        stateFilterMenuVisible ?
                            <img
                                className='arrow-up'
                                src={process.env.PUBLIC_URL + '/icons/icons-arrow-up.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icons-arrow-up@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icons-arrow-up@3x.png'} 3x`}
                                alt='arrow-up'
                            />
                            :
                            <img
                                className='arrow-down'
                                src={process.env.PUBLIC_URL + '/icons/icon-mask.png'} // This image size is not same with the arrow up and causing css problems
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icon-mask@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-mask@3x.png'} 3x`}
                                alt='arrow-down'
                            />
                    }
                </div>
            </div>

            {
                stateFilterMenuVisible &&
                <div className='state-filter-check-boxes'>
                    <div className='check-box first'>
                        <input type="checkbox" id="Available" name="Available" value="Available" onChange={handleAvailableChecked} />
                        <label htmlFor="Available"> Available</label>
                    </div>

                    <div className='check-box'>
                        <input type="checkbox" id="Patching" name="Patching" value="Patching" onChange={handlePatchingChecked} />
                        <label htmlFor="Patching"> Patching</label>
                    </div>

                    <div className='check-box'>
                        <input type="checkbox" id="Maintenance" name="Maintenance" value="Maintenance" onChange={handleMaintenanceChecked} />
                        <label htmlFor="Maintenance"> Maintenance</label>
                    </div>
                </div>
            }

        </div>
    )
}



