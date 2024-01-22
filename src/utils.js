const posts = [
	{
		postId: 1,
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		likes: 0,
		comments: [], // basic structure of the comments, are posts
		author: 1,
		createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
	},
	{
		postId: 2,
		body: 'officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
		likes: 0,
		comments: [
			{
				commentId: 2,
				body: 'business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
		],
		author: 1,
		createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
	},
	{
		postId: 3,
		body: 'quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
		likes: 0,
		comments: [
			{
				commentId: 3,
				body: 'leasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, ',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
			{
				commentId: 4,
				body: 'et, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
			{
				commentId: 5,
				body: 'iat nulla pariatur. Excepteur sint occaecat cupidatat non proide',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
			{
				commentId: 6,
				body: 'because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are ex',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
			{
				commentId: 7,
				body: 'vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
				comments: [],
				author: 1,
				createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
			},
		],
		author: 1,
		createdDate: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString(),
	},
];
const users = [
	{
		userId: 1,
		name: 'Alex Stout',
		username: 'A Dawg',
		bio: 'My awesome Bio',
		avatar: 'path/to/img',
		createdDate: 'date',
		email: 'stizout@gmail.com',
		friends: [
			//ID of friend(user), friended date, mutualFriends, followers, following, lastActive/lastActivity, etc...
		],
	},
];

export { users, posts };
