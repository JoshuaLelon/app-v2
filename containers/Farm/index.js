import { Grid, makeStyles } from '@material-ui/core';
import SearchInput from 'components/UI/SearchInput';
import PageHeader from 'parts/PageHeader';
import { useReducer } from 'react';
import { FarmFilterButtonBar } from './components/filterButtons';
import { FarmSortButtonBar } from './components/sortButtons';
import { farmValues } from './constants';
import { farmActionTypes, farmReducer } from './reducer';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		backgroundColor: theme.palette.background.default,
	},
	container: {
		width: '100%',
		maxWidth: 1200,
		marginTop: theme.spacing(2),
	},
	input: {
		boxShadow: theme.custom.utils.boxShadow,
	},
}));



const Farm = () => {
	const classes = useStyles();

	const [pageState, dispatch] = useReducer(farmReducer, {
		activeFarm: farmValues.all,
		search: '',
		activeSort: { value: 'none', asc: false }
	})

	const handleFilterChange = (v) => {
		dispatch({ type: farmActionTypes.setFilter, payload: v })
	}

	const handleSearch = (v) => {
		dispatch({ type: farmActionTypes.setSearch, payload: v })
	}

	const handleCancelSearch = () => {
		dispatch({ type: farmActionTypes.setSearch, payload: '' })
	}
	const onSortClick = (v) => {
		dispatch({ type: farmActionTypes.setSort, payload: v })
	}

	const { activeFarm, search, activeSort } = pageState
	return <main className={classes.root}>
		<PageHeader
			title='Farm'
			subHeader='TVL =...'
		/>
		<Grid container spacing={3} className={classes.container}>
			<Grid item xs={12}>
				<FarmFilterButtonBar {...{ activeFarm }} onChange={handleFilterChange} />
			</Grid>
			<Grid item xs={12}>
				<SearchInput
					className={classes.input}
					value={search}
					placeholder='Search ...'
					onChange={(newValue) => handleSearch(newValue)}
					onCancelSearch={handleCancelSearch}
				/>
			</Grid>
			<Grid item xs={12}>
				<FarmSortButtonBar {...{ activeSort, onSortClick }} />
			</Grid>
		</Grid>
	</main>
}

export default Farm