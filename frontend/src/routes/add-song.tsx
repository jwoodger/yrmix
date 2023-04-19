import React, { useRef } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { SONG_BASE_URL } from '../constants';

// Page to submit a specific song to the database.
const AddSong: React.FC = () => {
	const inputName = useRef<HTMLInputElement>(null);
	const inputArtist = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	// Submit the form.
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Collect form data.
		const formData = {
			name: inputName.current?.value || '',
			artist: inputArtist.current?.value || '',
		};
		try {
			// Send form data to the backend.
			const res = await fetch(SONG_BASE_URL, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(formData)
			});

			// The backend will respond with the ID of the newly created song. We want
			// to see that immediately after submitting the form.
			const id = (await res.json()).id;
			navigate(`/viewsong/${id}`);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<h1>Add Song:</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control ref={inputName} required />
				</Form.Group>

				<Form.Group>
					<Form.Label>Artist</Form.Label>
					<Form.Control ref={inputArtist} required />
				</Form.Group>

				<Button type='submit'>Create</Button>
			</Form>
		</Container>
	);
};

export default AddSong;
