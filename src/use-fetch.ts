import * as React from 'react';

type FetchProps = {
	url: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StateType = Record<string, any>;

export const useFetch = (options: FetchProps) => {
	const [data, setData] = React.useState<StateType | null>(null);

	React.useEffect(() => {
		console.log('Effect do fetch renderizando');
		console.log(options.url);

		fetch(options.url)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.warn({ error: err }));
	});

	return { data };
};
