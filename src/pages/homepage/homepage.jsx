import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/Directory/Directory'
import MenuItem from '../../components/MenuItem/MenuItem.jsx'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

export default Homepage