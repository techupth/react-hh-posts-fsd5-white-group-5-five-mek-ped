import { useState } from "react";
import postList from "./data/post-list";
function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {postList.map((item, index) => {
        const [like, setLike] = useState(item.likes);
        const handleLike = () => {
          setLike(like + 1);
        };
        const handleDisLike = () => {
          if (like != 0) {
            setLike(like - 1);
          }
        };

        return (
          <div class="post-list" key={index}>
            <div
              class="post-item"
              style={{
                width: "900px",
              }}
            >
              <div class="post-header">
                <h2>{`${item.title} #${item.id}`}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{like}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    handleLike(item.likes);
                  }}
                >
                  Like
                </button>
                <button class="dislike-button" onClick={handleDisLike}>
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
