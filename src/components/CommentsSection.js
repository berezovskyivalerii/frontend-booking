import React, {useState} from 'react'
import { Comment } from './Comment'
import './CommentsSection.css'

export function CommentsSection({ comments, batch = 3 }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <section className={`comments ${expanded ? 'comments--expanded' : ''}`}>
            <h2 className="profile-section-second-title">COMMENTS</h2>

            <div className="comments__flex">
                {comments.map((c, i) => (
                    <Comment
                        key={c.id}
                        {...c}
                        className={i >= batch ? 'extra' : ''}
                    />
                ))}
            </div>

            {/* кнопка выводится только на мобильных, но писать один раз удобно */}
            <button
                className="comments__more"
                onClick={() => setExpanded(v => !v)}>
                {expanded ? 'Hide reviews' : 'Show all reviews'}
            </button>
        </section>
    )
}
