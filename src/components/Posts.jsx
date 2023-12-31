import postData from "../data/postData";
import { useState } from "react";

function Posts() {
  const [postItem, setPostItem] = useState(postData);

  const likePost = (postIndex) => {
    const newPostItem = [...postItem];
    newPostItem[postIndex].likes = newPostItem[postIndex].likes + 1;
    setPostItem(newPostItem);
  };

  const dislikePost = (postIndex) => {
    const newPostItem = [...postItem];
    if (newPostItem[postIndex].likes > 0) {
      newPostItem[postIndex].likes = newPostItem[postIndex].likes - 1;
      setPostItem(newPostItem);
    }
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postItem.map((post, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>{post.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{post.likes}</span>
                </div>
              </div>
              <p class="post-content">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel turpis vestibulum, aliquet ipsum vitae, auctor
                risus. Morbi tincidunt, leo non molestie consectetur, elit
                libero faucibus tellus, sed fringilla tortor libero sit amet
                odio. Maecenas sed ante condimentum mauris euismod pellentesque
                eu eu justo... */}
                {post.content}
              </p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    likePost(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    dislikePost(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
