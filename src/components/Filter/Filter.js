import React from 'react'

// Styles
import './Filter.scss'

// Components
import StateFilter from '../StateFilter/StateFilter' 
import GenreFilter from '../GenreFilter/GenreFilter' 

export default function Filter() {
    return (
        <div className='filter'>
            <StateFilter />
            <GenreFilter />
        </div>
    )
}
