import { useState } from "react";
import postList from "./data/post-list";
function Posts() {
  const [posts, setposts] = useState(postList);
  const handleLike = (index) => {
    const updatePosts = [...posts];
    updatePosts[index].likes += 1;
    setposts(updatePosts);
  };
  const handleDislike = (index) => {
    const updatePosts = [...posts];
    if (updatePosts[index].likes !== 0) {
      updatePosts[index].likes -= 1;
      setposts(updatePosts);
    }
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {posts.map((item, index) => {
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
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    handleLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    handleDislike(index);
                  }}
                >
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
