import React, { useEffect } from 'react';

const Posts = ({ posts }) => {
  return (
    <div className='postsContainer'>
      {posts.map(post => (
      <div key={post.id} className="postLine">
        <div>
          <h3 className="postTitle">{post.title} </h3>  
          <p className="postBody">{post.body}</p>
        </div>
        <div className="postTags">{post.tags}</div>

     </div> 
      ))}
</div>
  );
};

export default Posts;
