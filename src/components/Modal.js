import React, { useState } from 'react';

export default function Modal({ setShowModal, handleSignIn }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	return (
		<div className='modal'>
			<div style={{ position: 'relative', paddingTop: '50px' }}>
				<div
					style={{ position: 'absolute', top: '10px', right: '15px' }}
					onClick={() => setShowModal(false)}
				>
					X
				</div>
				<h5>Please Sign up, or Sign In</h5>
				<div className='form'>
					<form
						onSubmit={(e) => {
							handleSignIn(e);
							handleSignIn(name, email);
						}}
					>
						<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
							<label>Name (shown to others)</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
							<label>Email (used to sign in)</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<button
							onClick={() => handleSignIn(name, email)}
							style={{ width: '50%', margin: '0 auto' }}
						>
							Sign in/ Sign UP
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
