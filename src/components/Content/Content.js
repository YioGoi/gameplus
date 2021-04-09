import React, { useEffect, useState } from 'react'

// Styles
import './Content.scss'

// Redux
import { useSelector } from 'react-redux'


// Helpers
import initializeData from '../../helpers/initializeData'

export default function Content() {
    // Global Store
    const sortState = useSelector(state => state.sort.sortState)
    const mainData = useSelector(state => state.data.mainData)
    // Local State
    const [contentData, setContentData] = useState(null)

    console.log(mainData)

    // First find titles first char to group game data
    useEffect(() => {
        // Simulate as this data'd come from DB
        if (mainData) {
            let data = initializeData(mainData, sortState)
            setContentData(data)
        }
    }, [mainData, sortState])

    return (
        <div className='content-container'>
            {
                contentData && contentData.map((item, index) => (
                    <div className='content' key={item.letter}>
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
