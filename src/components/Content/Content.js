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

    // First find titles first char to group game data
    useEffect(() => {
        // map the data which can be filtered or searched
        if (mainData) {
            let data = initializeData(mainData, sortState)
            setContentData(data)
        }
    }, [mainData, sortState])

    return (
        <div className='content-container'>
            {
                contentData && contentData.map((item) => (
                    <div className='content' key={item.letter}>
                        <div className='polygon-letter'>
                            <div className='wrapper'>
                                <img
                                    className='polygon'
                                    src={process.env.PUBLIC_URL + '/icons/polygon.png'}
                                    srcSet={`${process.env.PUBLIC_URL + '/icons/polygon@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/polygon@3x.png'} 3x`}
                                    alt='polygon'
                                />
                                <div className='letter'>
                                    {item.letter}
                                </div>
                            </div>
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
