import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	drawer: {
		position: 'fixed',
		left: 0,
		bottom: 0,

		'& .MuiDrawer-paper': {
			width: '200px',
			marginTop: '65px',
			paddingTop: '20px',
		},
	},
	active: {
		background: theme.palette.gradient.bottom,
		'& .MuiTypography-body1': {
			color: theme.palette.common.white,
		},
		'& .MuiAvatar-img': {
			filter: theme.action.hover.whiteFilter,
		},
	},
	listItem: {
		borderTopRightRadius: '25px',
		borderBottomRightRadius: '25px',
		width: '95%',
		'&:hover': {
			background: theme.palette.gradient.bottom,
			'& .MuiTypography-body1': {
				color: theme.palette.common.white,
			},
			'& .MuiAvatar-img': {
				filter: theme.action.hover.whiteFilter,
			},
		},
		'& .MuiListItemAvatar-root': {
			width: 'auto',
			height: 'auto',
			minWidth: 'auto',
			marginRight: '10px',
		},
		'& .MuiAvatar-root': {
			height: 'auto',
			width: 'auto',
		},
		'& .MuiTypography-body1': {
			fontSize: '12px',
			fontFamily: theme.typography.poppinsRegular,
		},
	},
	buttoMenu: {
		marginTop: '50%',
		marginRight: '10px'
	}
}));
