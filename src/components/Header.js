import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ signedIn, setShowModal }) {
	return (
		<ul style={{ listStyleType: 'none', margin: 0, padding: '20px 40px', overflow: 'hidden', background: '#333', color: 'white' }}>
			<li style={{ float: 'left' }}>Home</li>
			{signedIn ? <li style={{ float: 'left', marginLeft: '10px' }}>Friends Posts</li> : null}
			{signedIn ? (
				<li style={{ float: 'right' }}>
					<Link to={`/profile/${signedIn.userId}`}>My Profile</Link>
				</li>
			) : (
				<li
					style={{ float: 'right' }}
					onClick={() => setShowModal(true)}
				>
					SignIn
				</li>
			)}
		</ul>
	);
}
