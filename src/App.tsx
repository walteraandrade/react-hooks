import * as React from 'react';

import './App.css';
import { useFetch } from './use-fetch';

function App() {
	console.log('App renderizando');
	const { data } = useFetch({ url: './server/plato.json' });

	return (
		<>
			<div>
				<h1>O filósofo mais importante de todos é</h1>
				<div>{JSON.stringify(data?.name)}</div>
			</div>
		</>
	);
}

export default App;
