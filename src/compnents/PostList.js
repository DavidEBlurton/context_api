import React from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <div>Loading posts...</div>;
    if (error) return <div>Error loading posts: {error.message}</div>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
