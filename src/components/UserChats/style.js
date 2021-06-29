import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'space-between',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	chats: {
		height: '100%',
		flexGrow: '1',
		overflowX: 'hidden',
		overflowY: 'auto',
		paddingBottom: '10px',
		marginBottom: '5px',
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
			background: theme.palette.gradient.top,
		},
	},
	chat: {
		marginTop: '10px',
	},
	time: {
		fontSize: '8px',
		color: '#696969',
	},
	text: {
		color: '#696969',
		marginTop: '5px',
		width: '443px',
		fontSize: '10px',
		background: '#E5E5E5',
		borderRadius: '5px',
		padding: '5px 15px',
	},
	message: {
		height: '40px',
		border: `2px solid ${theme.border.main}`,
		borderRadius: '20px',
		display: 'flex',
		justifyContent: 'space-around',

		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:after': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
			borderBottom: 'none',
		},
		'& .MuiAvatar-img': {
			width: '100%',
			height: '25px',
			objectFit: 'none',
		},
	},
	input: {
		height: '40px',
		borderRadius: '20px',
		width: '100%',
		textAlign: 'start',
		color: '#696969',
		paddingLeft: '20px',
		fontSize: '12px',
		fontFamily: theme.typography.poppinsRegular,
	},
	sendButton: {
		border: '2px solid',
		borderRadius: '20px',
		height: '30px',
		width: '72px',
		marginTop: '5px',
		color: 'white',
		background: theme.palette.gradient.bottom,
		marginRight: '5px',
	},
}));
