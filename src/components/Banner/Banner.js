import React from 'react'

// Styles
import './Banner.scss'

// Components
import Search from '../Search/Search'

export default function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='title'>
                    {`Find the game you want, start to play wherever you like`}
                </div>

                <div className='description'>
                    {`With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!`}
                </div>

                <Search />
            </div>
        </div>
    )
}
