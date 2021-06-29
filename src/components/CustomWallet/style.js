import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '50px',
		borderRadius: '5px',
		position: 'relative',
		height: '324px',
		zIndex: 1,
		width: '100%',
		overflow: 'auto',
	},
	media: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		right: 0,
		left: 0,
		bottom: 0,
		top: 0,
		zIndex: -1,
	},

	btn: {
		justifyContent: 'space-between',
		padding: '20px 40px 20px 40px',
		'& .MuiButton-label': {
			color: theme.palette.common.white,
		},
	},
	Button: {
		borderRadius: '20px',
		fontFamily: theme.typography.Poppins,
		fontSize: '8px',
		background: theme.palette.common.white,
		'& .MuiButton-label': {
			color: '#C55DA7',
		},
	},

	cardContent: {
		marginTop: '40px',
		padding: 0,
	},
	text: {
		display: 'flex',
		fontSize: '10px',
		marginLeft: '15px',
		color: 'white',
		fontWeight: '200',
	},
	price: {
		fontSize: '30px',
		fontWeight: 'bold',
		color: 'white',
	},
	grid2: {
		marginLeft: '60px',
		marginTop: '20px',
	},
	grid3: {
		marginTop: '20px',
	},
}));
