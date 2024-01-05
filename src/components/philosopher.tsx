import * as React from 'react';
import { useFetch } from '../use-fetch';

export const Philosopher = () => {
	const [url, setUrl] = React.useState('../server/plato.json');
	const { data } = useFetch({ url });
	const urlRef = React.useRef('../server/plato.json');

	const changeRef = () => {
		if (urlRef?.current === '../server/plato.json') {
			urlRef.current = '../server/aristotle.json';
			return;
		}

		urlRef.current === '../server/plato.json';
	};

	const toggleUrl = () => {
		if (url === '../server/plato.json') {
			setUrl('./server/aristotle.json');
		} else setUrl('../server/plato.json');
	};

	return (
		<div>
			<h1>O filósofo mais importante de todos é</h1>
			<div>{JSON.stringify(data?.name)}</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '8px',
				}}
			>
				<button onClick={toggleUrl}>Change</button>
				<button onClick={changeRef}>ChangeRef</button>
			</div>
		</div>
	);
};
