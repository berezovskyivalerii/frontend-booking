import React from "react";
import { Comment } from "./Comment";
import "./CommentsSection.css";

export function CommentsSection({ comments, batch = 9 }) {
  return (
    <section className="page-section">
      <h2 className="profile-section-second-title">comments</h2>

      <div className="comments__flex">
        {
            comments.map((comment, index) => {
                if (index < batch) {
                    return (
                        <Comment
                            key={comment.id}
                            avatar={comment.avatar}
                            name={comment.name}
                            hotel={comment.hotel}
                            daysAgo={comment.daysAgo}
                            comment={comment.comment}
                        />
                    );
                }
                return null;
            })
        }
      </div>
    </section>
  );
}
