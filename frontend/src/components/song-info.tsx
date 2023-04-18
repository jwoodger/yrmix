import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

// Properties of the SongInfo component.
export interface SongInfoProps {
	name: string, // Title of the song.
	artist: string // Song artist.
};

// Component showing the info for an individual song.
export const SongInfo: React.FC<SongInfoProps> = (props) => {
	return (
		<ListGroup>
			<ListGroupItem><b>Title:</b> {props.name}</ListGroupItem>
			<ListGroupItem><b>Artist:</b> {props.artist}</ListGroupItem>
		</ListGroup>
	);
};

export default SongInfo;
