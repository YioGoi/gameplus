import React from 'react'

// Styles
import './Footer.scss'

// Dummy Sitemap
const sitemapArray = [
    {
        text: 'Games'
    },
    {
        text: 'Contact Us'
    },
    {
        text: 'FAQs'
    },
    {
        text: 'Memberships'
    },
    {
        text: 'Blog'
    },
    {
        text: 'Service Status'
    },
    {
        text: 'Download'
    }
]

export default function Footer() {

    return (
        <div className='footer-container'>
            <div className='sitemap'>
                <div className='left'>
                    {
                        sitemapArray.map((item, index) => (
                            <div className='item' key={index}>
                                {item.text}
                            </div>
                        ))
                    }
                </div>

                <div className='right'>
                    <div className='social'>
                        <div className='title'>
                            {`Follow Us!`}
                        </div>

                        <div className='icons'>
                            <img
                                className='facebook'
                                src={process.env.PUBLIC_URL + '/icons/icon-facebook.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icon-facebook@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-facebook@3x.png'} 3x`}
                                alt='facebook'
                            />
                            <img
                                className='twitter'
                                src={process.env.PUBLIC_URL + '/icons/icon-twitter.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icon-twitter@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-twitter@3x.png'} 3x`}
                                alt='twitter'
                            />
                            <img
                                className='instagram'
                                src={process.env.PUBLIC_URL + '/icons/icon-instagram.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icon-instagram@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-instagram@3x.png'} 3x`}
                                alt='instagram'
                            />
                            <img
                                className='youtube'
                                src={process.env.PUBLIC_URL + '/icons/icon-youtube.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icon-youtube@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icon-youtube@3x.png'} 3x`}
                                alt='youtube'
                            />
                        </div>
                    </div>

                    <div className='language'>
                        <div className='title'>
                            {`Site Language`}
                        </div>

                        <div className='options'>
                            {`English`}

                            <img
                                className='arrow'
                                src={process.env.PUBLIC_URL + '/icons/icons-arrow-large.png'}
                                srcSet={`${process.env.PUBLIC_URL + '/icons/icons-arrow-large@2x.png'} 2x, ${process.env.PUBLIC_URL + '/icons/icons-arrow-large@3x.png'} 3x`}
                                alt='arrow'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div className='bottom-left'>
                    <span>
                        {`Terms of Use`}
                    </span>
                    <span className='others'>
                        {`Privacy Policy`}
                    </span>
                    <span className='others'>
                        {`Cookies`}
                    </span>
                </div>

                <div className='bottom-right'>
                    {`Tüm hakları saklıdır.`}
                </div>
            </div>
        </div>
    )
}
