import React from 'react';
import { Container } from 'react-bootstrap';

import SongInfo from '../components/song-info';

const Home: React.FC = () => {
	return (
		<Container>
			<SongInfo name='Here Comes the Sun' artist='The Beatles' />
		</Container>
	);
};

export default Home;
