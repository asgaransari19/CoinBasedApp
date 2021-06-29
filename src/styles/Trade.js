import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
	root: {
		border: `2px solid ${theme.border.main}`,
		height: '60vh',
		width: '100%',
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: '25px',
		borderRadius: '5px',
		background: 'white',
		display: 'flex',
		overflow: 'hidden',
	},
	userBox: {
		margin: '15px 10px',
		cursor: 'pointer',
	},
	userSection: {
		overflowX: 'hidden',
		overflowY: 'auto',
		height: '100%',

		scrollbarWidth: 'thin',
		'&::-webkit-scrollbar': {
			width: '0.2em',
			marginLeft: '10px',
			opacity: '.1',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
		},
		'&::-webkit-scrollbar-thumb': {
			background: theme.palette.gradient.bottom,
		},
	},
	userChatsSection: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		padding: '20px 40px',
		borderLeft: `2px solid ${theme.border.main}`,
	},

	newButton: {
		height: '42px',
		width: '134Px',
		fontSize: '10px',
		borderRadius: '20px',
		background: theme.palette.gradient.bottom,
		color: theme.palette.common.white,
		marginLeft: '25%',
		marginTop: '100px'
	},
}));
