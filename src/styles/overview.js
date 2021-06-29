import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	box: {
		background: `linear-gradient(60deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
	},
	root: {
		height: 'auto',
		width: '100%',
		border: '1px solid',
		marginTop: '20px',
		marginRight: 'auto',
		marginLeft: 'auto',
		borderRadius: '5px',
		color: theme.border.main,
		overflow: 'auto',
		position: 'relative',
	},
	Typography: {
		marginLeft: '75px',
		marginTop: '60px',
		fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
	},
	tableSection: {
		// display: 'flex',
		// marginLeft: '25px',
		// justifyContent: 'space-between',

		'& .MuiTableCell-head': {
			fontSize: '12px',
			color: theme.palette.secondary.rgbMain,
			border: 'none',
		},
	},
	table: {
		width: '80%',
		marginLeft: '40px',
	},
	itunecolum: {
		fontSize: '10px',
		border: 'none',
	},
	tableButton: {
		position: 'absolute',
		top: '50%',
		right: '20px',
		width: 'fit-content',
		'& .MuiSvgIcon-root': {
			color: '#FFFFFF',
			height: '30px',
			width: '30px',
			borderRadius: '50%',
			background: theme.palette.gradient.bottom,
			padding: '10px',
		},
	},
}));
