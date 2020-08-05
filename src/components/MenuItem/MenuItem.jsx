import React, { Component } from 'react'
import './MenuItem.scss'
class MenuItem extends Component {
    render() {
               return (
            <div className={`${this.props.size} menu-item`}>
                <div className='background-image' style={{backgroundImage:`url(${this.props.imageUrl})`}}/>
             
                    <div className='content'>
                        <h1 className='title'>{this.props.title.toUpperCase()}</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            
            
        )
    }
}

export default MenuItem