import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '100%',
	},
	leftSection: {
		fontFamily: theme.typography.poppinsMedium,
		fontSize: '12px',
		fontWeight: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
	},
	rightSection: {
		fontWeight: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
		fontFamily: theme.typography.poppinsMedium,
		fontSize: '12px',
	},
	rightBox1: {
		display: 'flex',
		justifyContent: 'flex-end',
	},

	triangle: {
		placeItems: 'center',
		textAlign: 'center',
		'& .MuiAvatar-img': {
			width: 'auto',
			height: 'auto',
			marginBottom: '14px',
		},
	},
	calender: {
		display: 'flex',
		justifyContent: 'flex-end',
		'& .MuiAvatar-img': {
			width: 'auto',
			height: 'auto',
			display: 'flex',
			placeItems: 'center',
		},
	},
}));
