import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import SongInfo from '../components/song-info';

const SONG_BASE_URL: string = `${process.env.REACT_APP_API_URL}/song`;

// Page that shows details for a specific song.
const ViewSong: React.FC = () => {
	const { songId } = useParams();
	const url = `${SONG_BASE_URL}/${songId}`;
	const [data, setData] = useState({ name: "loading...", artist: "loading..." });

	// Get the song info from the backend.
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(obj =>setData(obj))
			.catch(err => console.log(err));
	}, [url]);

	return (
		<Container>
			<SongInfo artist={data.artist} name={data.name} />
		</Container>
	);
}

export default ViewSong;
