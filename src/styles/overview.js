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
	},
	Typography: {
		marginLeft: '75px',
		marginTop: '60px',
		fontFamily: theme.typography.poppinsBold,
		color: theme.palette.text.primary,
	},
	label: {
		display: 'flex',
		marginLeft: '25px',
		justifyContent: 'space-between',

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
	tableButton:{
		color:"#FFFFFF",
		height: '60px',
		width: '30px',
		borderRadius: '50%',
		marginTop: '120px',
		marginRight: '70px',
		background: theme.palette.gradient.bottom,
	}
}));
