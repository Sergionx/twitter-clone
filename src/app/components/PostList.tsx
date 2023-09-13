import React from 'react';
import PostCard from '@components/PostCard';

interface Props {
  posts: any[];
}

export default function PostList({ posts }: Props) {
  return (
    <>
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          userFullName={post.user.name}
          userName={post.user.user_name}
          avatarUrl={post.user.avatar_url}
          content={post.content}
        />
      ))}
    </>
  );
}
