import React from 'react'

// Styles
import './Header.scss'

export default function Header() {

    const menuArray = [
        {
            text: 'Games',
            default: true
        },
        {
            text: 'Membership'
        },
        {
            text: 'Download'
        },
        {
            text: 'Blog'
        },
        {
            text: 'Support'
        }
    ]
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src={process.env.PUBLIC_URL + '/icons/logo.png'}
                    srcSet={`${process.env.PUBLIC_URL + '/icons/logo@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/logo@3x.png'} 3x`}
                    alt='logo'
                />
            </div>

            <div className='right-pane'>
                <div className='menu'>
                    {
                        menuArray.map((menuItem, index) => (
                            <div className='menu-item' key={index}>
                                <div className={menuItem.default ? 'text selected' : 'text'}>
                                    {menuItem.text}
                                </div>
                                {
                                    menuItem.default &&
                                    <div className='icon'>
                                        <img
                                            className='path'
                                            src={process.env.PUBLIC_URL + '/icons/path-2.png'}
                                            srcSet={`${process.env.PUBLIC_URL + '/icons/path-2@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/path-2@3x.png'} 3x`}
                                            alt='path'
                                        />
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>

                <div className='play-button-container'>
                    <div className='play-button'>
                        {`LET'S PLAY`}
                    </div>
                </div>
            </div>
        </div>
    )
}
