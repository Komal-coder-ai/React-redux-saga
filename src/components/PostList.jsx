import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostItem from './PostItem';
import { fetchPostsRequest } from '../redux/actions/postAction';

const PostList = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
