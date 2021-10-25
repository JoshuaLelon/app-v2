export const farmActionTypes={
	setFilter: 'setFilter'
}

export const farmReducer=(state,action) => {
	const newState={...state}

	switch(action.type) {
		case farmActionTypes.setFilter: {
			newState.activeFarm=action.payload
		}
			break;

		default:
			break;
	}

	return newState

}