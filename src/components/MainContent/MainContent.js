import React from 'react'

// Styles
import './MainContent.scss'

// Components
import MainContentHeader from '../MainContentHeader/MainContentHeader'
import MainContentInner from '../MainContentInner/MainContentInner'

export default function MainContent() {
    return (
        <div className='main-content-container'>
                <MainContentHeader />
                <MainContentInner />
        </div>
    )
}
