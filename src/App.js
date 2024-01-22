import { useLoaderData } from 'react-router-dom';

import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Modal from './components/Modal';

function App() {
	const { users, posts } = useLoaderData();
	const basicFriend = { friends: [...users] };
	const [signedIn, setSignedIn] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const modalStyles = showModal ? { height: '100%', opacity: '80%', backgroundColor: 'black', position: 'fixed', width: '100%', top: 0, left: 0 } : { height: 0 };

	const handleSignIn = (name, email) => {
		const indexOf = users.indexOf((u) => u.email === email);
		if (indexOf !== -1) {
			setSignedIn(users[indexOf]);
		} else {
			users.push({ userId: users.length, name, email, ...basicFriend });
			setSignedIn(users[users.length - 1]);
		}
		setShowModal(false);
	};
	return (
		<div
			className='App relative'
			style={{ overflow: showModal ? 'hidden' : 'auto', height: '100vh' }}
		>
			<div>
				<Header
					signedIn={signedIn}
					setShowModal={setShowModal}
				/>
				<main style={{ paddingTop: '100px' }}>
					{posts.map((p) => (
						<Post
							post={p}
							author={users.find((u) => u.userId === p.author)}
						/>
					))}
				</main>
			</div>
			<div style={modalStyles} />
			{showModal ? (
				<Modal
					setShowModal={setShowModal}
					handleSignIn={handleSignIn}
				/>
			) : null}
		</div>
	);
}

export default App;
