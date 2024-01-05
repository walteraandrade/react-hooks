import * as React from 'react';

import './App.css';
import NewComponent from './components/new-component';
import { Philosopher } from './components/philosopher';
import { HeavyComponent } from './heavy-component';

function App() {
	return (
		<>
			<Philosopher />
			<NewComponent />
			<HeavyComponent />
		</>
	);
}

export default App;
