import React from 'react'

// Styles
import './Banner.scss'

export default function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='title'>
                    {`Find the game you want. Start to play wherever you like !`}
                </div>

                <div className='description'>
                    {`With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!`}
                </div>

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
                        <input type="text" id="input" name="input" placeholder='Search Games' />
                    </div>
                </div>
            </div>
        </div>
    )
}
