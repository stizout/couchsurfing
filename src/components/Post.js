import React from 'react';

export default function Post({ post, author }) {
	return (
		<div className='post'>
			<h1 className='p-top'>
				{author?.name} - {post.createdDate}
			</h1>
			<div className='p-body'>{post.body}</div>
			<div className='p-bottom'>
				<div>Likes: {post.likes}</div>
				<div>Comments: {post.comments.length}</div>
			</div>
		</div>
	);
}
