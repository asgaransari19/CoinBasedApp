import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
	root: {
		height: 'auto',
		color: theme.border.main,
		border: '2px solid',
		background: '#FFFFFF',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '40px',
		borderRadius: '5px',
		width: '100%',
		overflow: 'hidden',
		'& .MuiTableCell-head': {
			fontSize: '12px',
			fontFamily: theme.typography.poppinsBold,
			letterSpacing: '.05em',
		},
		'& .MuiTableCell-body': {
			fontSize: '12px',
			fontFamily: theme.typography.poppinsRegular,
		},
	},
	tableSection: {
		width: '100%',
		overflow: 'auto',
		padding: '20px 55px',
		'& .MuiTableCell-head': {
			fontSize: '12px',
			fontWeight: '700',
			color: '#696969',
		},
	},
	status: {
		textTransform: 'capitalize',
		whiteSpace: 'nowrap',
		fontFamily: theme.typography.poppinsRegular,
		color: theme.palette.common.white,
		fontSize: '12px',
		borderRadius: '20px',
		padding: '2px 10px',
		textAlign: 'center',
	},
	completed: {
		background: theme.palette.success.main,
	},
	'in-progress': {
		background: theme.palette.gradient.bottom,
	},
	failed: {
		background: theme.palette.error.main,
	},
	typeAvatar: {
		'& img': {
			width: 'auto',
			height: 'auto',
		},
	},
	button: {
		height: '42px',
		width: '134px',
		justifyContent: 'center',
		borderRadius: '20px',
		marginTop: '40px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	viewMorebtn: {
		height: '42px',
		width: '134px',
		background: theme.palette.gradient.bottom,
		color: theme.palette.common.white,
		justifyContent: 'center',
		borderRadius: '20px',
		fontSize: '10px',
	},
}));
