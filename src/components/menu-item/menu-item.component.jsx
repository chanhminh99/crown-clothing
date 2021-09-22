import React from 'react'
import { withRouter } from 'react-router'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    console.log('match', `${match.url}${linkUrl}`);
    return (
        <div
            className={size ? `menu-item ${size}` : 'menu-item'}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                style={{backgroundImage: `url(${imageUrl})`}}
                className='background-image' />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);