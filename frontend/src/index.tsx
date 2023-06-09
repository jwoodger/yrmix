import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home';

// Song routes
import AddSong from './routes/add-song';
import ViewSong from './routes/view-song';

// Use Bootstrap CSS.
import 'bootstrap/dist/css/bootstrap.min.css';

// Set up routes.
const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/addsong', element: <AddSong /> },
	{ path: '/viewsong/:songId', element: <ViewSong /> },
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
