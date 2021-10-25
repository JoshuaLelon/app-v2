import {Button,Grid,makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import PageHeader from 'parts/PageHeader';
import {useReducer} from 'react';
import {FarmFilterButtonBar} from './components/filterButtons';
import {farmValues} from './constants';
import {farmActionTypes,farmReducer} from './reducer';

const useStyles=makeStyles((theme) => ({
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
	filterButton: {
		marginRight: theme.spacing(1)
	},
	inactiveButton: {
		color: theme.palette.secondary.main
	},
	activeButton: {
		color: theme.palette.text.primary
	}
}));



const Farm=() => {
	const classes=useStyles();

	const [pageState,dispatch]=useReducer(farmReducer,{
		activeFarm: farmValues.all,
		search: ''
	})

	const handleFilterChange=(v) => {
		dispatch({type: farmActionTypes.setFilter,payload: v})
	}



	const {activeFarm,search}=pageState
	return <main className={classes.root}>
		<PageHeader
			title='Farm'
			subHeader='Farm'
		/>
		<Grid container spacing={3} className={classes.container}>
			<Grid item xs={12}>
				<FarmFilterButtonBar {...{activeFarm}} onChange={handleFilterChange} />
			</Grid>
			<Grid item xs={12}>
				<FarmFilterButtonBar {...{activeFarm}} onChange={handleFilterChange} />
			</Grid>
		</Grid>
	</main>
}

export default Farm