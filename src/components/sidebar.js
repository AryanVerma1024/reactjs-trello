import React from 'react'
import ffArrow from '../images/ffArrow.png'

export default function SideBar() {
    return (
        <div>
            <nav className="side">
                <button className='double' >
                    <img
                        src="https://trello-replica.web.app/static/media/user-blue.022f390c.png"
                        alt=""
                        className="icon "
                    />
                </button>
                <button className='arr' >
                    <img src={ffArrow} alt="" className="icon" />
                </button>
            </nav>
        </div>
    )
}