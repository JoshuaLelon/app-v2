import { Button, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { sortableFields } from '../constants';
import KeyboardDown from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardUp from '@material-ui/icons/KeyboardArrowUpRounded';

const useStyles = makeStyles((theme) => ({
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
    },
    label: {
        fontWeight: 'bold',

        color: theme.palette.text.primary,
        padding: theme.spacing(2),
    },
}));



export const FarmSortButtonBar = ({ onSortClick, activeSort }) => {

    const classes = useStyles();

    const handleSortClick = (v) => onSortClick(v)
    return <>
        <Typography variant="overline" className={classes.label}>
            Sort By :
        </Typography>
        {sortableFields.map((item) => {
            return <Button
                key={item.value}
                variant='text'
                onClick={() => handleSortClick(item.value)}
                className={clsx(classes.bold, classes.filterButton, classes.inactiveButton, activeSort.value === item.value && classes.activeButton)}
                endIcon={activeSort.value === item.value && (activeSort.asc ? <KeyboardDown /> : <KeyboardUp />)}
            >
                {item.title}
            </Button>
        })}</>
}