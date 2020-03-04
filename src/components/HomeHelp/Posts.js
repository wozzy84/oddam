import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post-line">
          <div>
            <h3 className="post-line__title">{post.title} </h3>
            <p className="post-line__body">{post.body}</p>
          </div>
          <div className="post-line__tag">{post.tags}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
