export const farmActionTypes = {
	setFilter: 'setFilter',
	setSearch: 'setSearch',
	setSort: 'setSort'
}

export const farmReducer = (state, action) => {
	const newState = { ...state }

	switch (action.type) {
		case farmActionTypes.setFilter: {
			newState.activeFarm = action.payload
		}
			break;
		case farmActionTypes.setSearch: {
			newState.search = action.payload
		}
			break;
		case farmActionTypes.setSort: {
			const { activeSort } = newState
			const tmp = { ...activeSort }
			if (activeSort.value === action.payload) {
				tmp.asc = !tmp.asc
			}
			else {
				tmp.value = action.payload
				tmp.asc = true
			}

			newState.activeSort = tmp
		}
			break;
		default:
			break;
	}

	return newState

}