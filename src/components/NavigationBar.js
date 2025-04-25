import React from 'react'
import "./NavigationBar.css"

function BackgroundImageNavigationBar(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div
            className="background-image-container"
            style={backgroundStyle}></div>
    )
}

export function NavigationBar(props) {
    return (
        <section className="navigation-bar-container">
            <BackgroundImageNavigationBar url={props.url} />
            
            <nav className="nav-container">
                <div className="search-input-container">
                    <img src="./images/plane.png" alt="" />
                    <input type="text" placeholder="Where are you going?" />
                </div>

                <div className="divider" />

                <div className="search-input-container">
                    <img src="./images/calendar.png" alt="" />
                    <input type="text" placeholder="Check in - Check out" />
                </div>

                <div className="divider" />

                <div className="search-input-container">
                    <img src="./images/profile2user.png" alt="" />
                    <input
                        type="text"
                        placeholder="2 adults 0 children 1 room"
                    />
                    <img src="./images/arrows-switch.png" alt="" />
                </div>

                <button className="search-button">
                    <img src="./images/search-icon.png" alt="search icon" />
                </button>
            </nav>
        </section>
    )
}
