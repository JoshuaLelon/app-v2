import {Button,makeStyles} from '@material-ui/core'
import clsx from 'clsx'
import {farms} from '../constants';

const useStyles=makeStyles((theme) => ({
	bold: {
		fontWeight: 600
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







export const FarmFilterButtonBar=({onChange,activeFarm}) => {
	const classes=useStyles();

	const handleFilterClick=(v) => onChange(v)

	return farms.map((item) => {
		return <Button
			key={item.value}
			variant='text'
			onClick={() => handleFilterClick(item.value)}
			className={clsx(classes.bold,classes.filterButton,classes.inactiveButton,activeFarm===item.value&&classes.activeButton)}
		>
			{item.title}
		</Button>
	})
}