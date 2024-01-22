import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Profile() {
	const { users, posts, params } = useLoaderData();
	const user = users?.find((u) => u?.userId === +params?.id);
	return (
		<div>
			Wecome to your profile {user.name}
			<div>You have {posts.length} posts</div>
			<div>
				You have {user.friends.length} friends {user.friends < 2 ? '(cmon... you can do better!)' : null}
			</div>
		</div>
	);
}
