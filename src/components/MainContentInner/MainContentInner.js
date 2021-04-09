import React from 'react'

// Styles
import './MainContentInner.scss'

// Components
import Filter from '../Filter/Filter'
import Content from '../Content/Content'

export default function MainContentInner() {
    return (
        <div className='main-content-inner'>
            <Filter />
            <Content />
        </div>
    )
}
