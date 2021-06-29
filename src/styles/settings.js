import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
	root: {
		height: 'auto',
		width: '80%',
		marginTop: '40px',
		padding: '20px 40px 20px 40px',
		background: 'white',
		border: '1px solid ',
		color: '#F8F8FF',
	},
	topBox: {
		borderBottom: '1px solid ',
		color: '#F8F8FF',
		display: 'flex',
		justifyContent: 'space-between',
		placeItems: 'center',
		textAlign: 'center',

		'& .MuiTypography-body1': {
			color: '#696969',
			fontWeight: 'bold',
			fontFamily: theme.typography.poppins,
		},
	},
	oppositeTringle: {
		placeItems: 'center',
		textAlign: 'center',
		'& .MuiAvatar-img': {
			width: 'auto',
			height: 'auto',
		},
	},
	profile: {
		height: '80px',
		width: '80px',
		// border: '1px solid',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '25px',
		borderRadius: '50%',
	},
	asgar: {
		height: '80px',
		width: '80px',
		borderRadius: '50%',
	},
	text: {
		width: '200px',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',

		'& .MuiTypography-body1': {
			fontFamily: theme.typography.poppins,
			fontSize: '7px',
			color: '#989898',
		},
	},
	input: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '30px',
		placeItems: 'center',
		alignItems: 'center',
		height: '60px',
		width: '300px',
	},

	textField: {
		height: '60px',
		width: '300px',
		'& .MuiOutlinedInput-input': {
			fontSize: 'small',
		},
	},
	name: {
		position: 'relative',
		borderRadius: '30px',
		marginLeft: '10px',

		
	},

	button: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '35px',
		width: '150px',
	},
	btn: {
		color: 'white',
		fontSize: '10px',
		height: '35px',
		background: theme.palette.gradient.bottom,
		width: '150px',
		borderRadius: '20px',
		marginTop: '40px',
		border: 'none',
	},
	middleBox: {
		border: '1px solid ',
		color: '#F8F8FF',
		height: '94px',

		marginTop: '50px',
		display: 'flex',
		justifyContent: 'space-between',
		placeItems: 'center',
		textAlign: 'center',
		'& .MuiTypography-body1': {
			color: '#696969',
			fontWeight: 'bold',
			padding: '50px',
		},
	},
	arrayUp: {
		placeItems: 'center',
		textAlign: 'center',
		padding: '50px',

		'& .MuiAvatar-img': {
			width: 'auto',
			height: 'auto',
		},
	},

	thirdBox: {
		marginTop: '5px',
		borderBottom: '1px solid',
		color: '#F8F8FF',
		height: '94px',
		padding: '50px',

		display: 'flex',
		justifyContent: 'space-between',
		placeItems: 'center',
		textAlign: 'center',
		'& .MuiTypography-body1': {
			color: '#696969',
			fontWeight: 'bold',
		},
	},
	oppositeTringle2: {
		placeItems: 'center',
		textAlign: 'center',
		'& .MuiAvatar-img': {
			width: 'auto',
			height: 'auto',
			padding: '50px',
		},
	},

	text1: {
		width: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		marginTop: '50px',
		'& .MuiTypography-body1': {
			fontFamily: theme.typography.poppins,
			fontSize: '12px',
			color: '#989898',
		},
	},
	card: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '297px',
		marginTop: '50px',
		height: '180px',
		borderRadius: '5px',

		'& .MuiCardMedia-root': {
			width: '297px',
			height: '187px',

			backgroundSize: 'auto',
		},
	},
}));
