import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export interface SongInfoProps {
	name: string,
	artist: string
};

export const SongInfo: React.FC<SongInfoProps> = (props) => {
	return (
		<ListGroup>
			<ListGroupItem><b>Title:</b> {props.name}</ListGroupItem>
			<ListGroupItem><b>Artist:</b> {props.artist}</ListGroupItem>
		</ListGroup>
	);
};

export default SongInfo;
