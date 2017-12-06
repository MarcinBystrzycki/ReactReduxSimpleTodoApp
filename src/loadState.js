export const loadState = () => {
	try {
		const serializedStorage = localStorage.getItem('state');
		if (serializedStorage === null) {
			return undefined;
		}
		return JSON.parse(serializedStorage);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		throw err;
	}
};

