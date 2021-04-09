import React, { useEffect, useState } from 'react'

// Styles
import './Content.scss'

// Dummy Data
import { dummyData } from '../../data/dummyData'

export default function Content() {
    // Local State
    const [contentData, setContentData] = useState(null)

    // First find titles first char to group game data
    useEffect(() => {
        // Simulate as this data'd come from DB
        if (dummyData) {
            let clone = Object.assign([], dummyData)

            const obj = clone.reduce((acc, c) => {
                const letter = c.title[0];
                acc[letter] = (acc[letter] || []).concat(c);
                return acc;
            }, {})

            // `map` over the object entries to return an array of objects
            // In first render sort it as A-Z
            clone = Object.entries(obj).map(([letter, data]) => {
                return { letter, data }
            }).sort((a, b) => a.letter > b.letter)

            setContentData(clone)
        }
    }, [])

    console.log(contentData)

    return (
        <div className='content-container'>
            {
                contentData && contentData.map((item, index) => (
                    <div className='content' key={index}>
                        <div className='polygon-letter'>
                            <img
                                className='polygon'
                                src={process.env.PUBLIC_URL + '/icons/polygon.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/polygon@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/polygon@3x.png'} 3x`}
                                alt='polygon'
                            />
                            <span>
                                {item.letter}
                            </span>
                        </div>

                        <div className='games'>
                            {item.data.map((game, gameIndex) => (
                                <div className='game' key={gameIndex}>
                                    {game.title}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
