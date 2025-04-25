import React from 'react'
import "./Comment.css"

export function Comment(props) {
    const { avatar, name, hotel, daysAgo, comment } = props;
    return (
        <div className="review-card">
            <div className="review-header">
                <div className="user-info">
                    <img src={avatar} alt={name} className="avatar" />
                    <div className="user-text">
                        <div className="user-name">{name}</div>
                        <div className="review-hotel-name">{hotel}</div>
                    </div>
                </div>
                <div className="review-date">{daysAgo} days ago</div>
            </div>
            <p className="review-text">{comment}</p>
        </div>
    )
}
