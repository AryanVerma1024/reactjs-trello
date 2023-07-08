import React from "react"
import { ReactComponent as MenuGrid } from "../images/menu.svg"
import { ReactComponent as TrelloLogo } from "../images/trello.svg"
import { ReactComponent as DownArrow } from "../images/down.svg"
import { ReactComponent as Info } from "../images/infoCircle.svg"
import { ReactComponent as Bell } from "../images/bell.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="leftMenu">
                <button className="hover">
                    <MenuGrid className="icon" />
                </button>
                <div className="hover">
                    <div className="left">
                        <TrelloLogo className="trello" />
                        <h2>Trello</h2>
                    </div>
                </div>
                <div className="hover">
                    <div className="left">
                        Workspaces
                        <DownArrow className="icons" />
                    </div>
                </div>
                <div className="hover">
                    <div className="left">
                        Recent
                        <DownArrow className="icons" />
                    </div>
                </div>
                <div className="hover">
                    <div className="left">
                        Starred
                        <DownArrow className="icons" />
                    </div>
                </div>
                <div className="hover">
                    <div className="left">
                        Templates
                        <DownArrow className="icons" />
                    </div>
                </div>
                <div className="left create hover">
                    Create
                </div>
            </div>

            <div className="rightMenu">
                <div className="search">
                    <input type="search" placeholder="Search" />
                    <span className="material-icons"></span>
                </div>
                <button>
                    <Info className="icon" />
                </button>
                <button>
                    <Bell className="icon" />
                </button>
                <div className="userProfile">
                    <p>AV</p>
                </div>
            </div>
        </header>
    )
}