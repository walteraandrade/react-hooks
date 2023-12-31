import * as React from 'react';

type FetchProps = {
	url: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StateType = Record<string, number>;

export const useFetch = (options: FetchProps) => {
	const [data, setData] = React.useState<StateType | null>(null);

	const fetchPhilosopher = React.useCallback(() => {
		fetch(options.url)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.warn({ error: err }));
	}, [options.url]);

	React.useEffect(() => {
		fetchPhilosopher();
	}, [fetchPhilosopher]);

	return { data };
};
