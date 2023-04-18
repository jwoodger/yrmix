import React from 'react';
import { Alert, Container } from 'react-bootstrap';

// Route to the home page.
const Home: React.FC = () => {
	return (
		<Container>
			<Alert variant="dark">Hello!</Alert>
		</Container>
	);
};

export default Home;
