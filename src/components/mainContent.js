import React from 'react'
import Listings from './listing'

export default function MainContent() {
    return (
        <main>
            <section>
                <div className="thisboard">
                    <div>
                        <img src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg" alt="" />
                        <span className="thiswritten">This board is set to public. Board admins can change its visibility setting at any time.</span>
                        <button className="learn">Learn more here</button>
                    </div>
                    <span className="material-icons"></span>
                </div>
                <div className="topmain">
                    <div className="BoardName">
                        <h1>Your Board</h1>
                        <div className="star">
                            <span className="material-icons"></span>
                        </div>
                        <div className="seperator"></div>
                        <button className="public">
                            <img src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg" alt="" className="icon" />
                            <span className="publicwritten">Public</span>
                        </button>
                        <div className="seperator"></div>
                        <span className="sharedUsers">AH</span>
                    </div>
                    <Listings/>
                </div>
            </section>
        </main>
    )
}