import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	card: {
		position: 'relative',
		maxWidth: '400px',
	},
	moreButton: {
		position: 'absolute',
		right: 0,
		top: 0,
	},
	cardContent: {
		display: 'flex',
	},
	avatarBox: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& .MuiTypography-root': {
			position: 'absolute',
			top: '42%',
			fontSize: '12px',
			fontFamily: theme.typography.poppinsBold,
			color: theme.palette.error.main,
		},
	},
	avatar: {
		height: '100%',
		width: '100%',
		'& img': {
			width: 'auto',
			height: 'auto',
		},
	},
	textBox: {
		display: 'flex',
		flexDirection: 'column',
	},
	bigText: {
		marginLeft: '40px',
		fontWeight: 'bold',
		fontSize: '16px',
		marginTop: '20px',
	},
	smallText: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '50px',
		placeItems: 'center',
		display: 'flex',
		alignItems: 'center',
		fontWeight: 'bold',
		'& img': {
			width: 'auto',
			height: 'auto',
			marginRight: 'auto',
		},
	},
	logo: {
		height: '70px',
		width: 'auto',
	},

	triangleText: {
		display: 'flex',
		placeItems: 'center',
		textAlign: 'center',
		fontSize: '12px',
		width: '80px',
		justifyContent: 'start',
		marginLeft: 'auto',
		color: '#8DE8D0',

		'& img': {
			width: 'auto',
			height: 'auto',
		},
	},
}));
