import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		boxShadow: theme.shadows[1],
	},
	logoAvatar: {
		height: 'auto',
		width: 'auto',
		'& .MuiAvatar-img': {
			width: '100px',
			height: 'auto',
		},
	},

	userProfile: {
		'& .MuiTypography-body1': {
			fontFamily: theme.typography.poppins,
			marginLeft: '5px',
			fontSize: '12px',
			color: theme.palette.text.primary,
		},
	},

	badge: {
		'& .MuiBadge-anchorOriginTopRightRectangle': {
			width: '22px',
			height: '22px',
			borderRadius: '50%',
			padding: '2px',
			color: theme.palette.common.white,
			background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
		},
	},

	search: {
		background: `linear-gradient(to right bottom, #FD749B, #281AC8)`,
		padding: '0.12em',
		borderRadius: '20px',
		marginRight: '20px',
		width: '30%',
	},
	textField: {
		background: 'white',
		borderRadius: '20px',
		width: '100%',

		'& img': {
			marginRight: '15px',
		},

		' & .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		' & .MuiInput-underline:after': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: 'none',
		},
	},
	menuButton: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},

}));
