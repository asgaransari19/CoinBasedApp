import { Box, makeStyles, Avatar, Typography, Badge } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	userlist: {
		height: '40px',
		width: '250px',
		display: 'flex',
		placeItems: 'center',
		marginTop: '30px',

		' & .MuiBadge-colorPrimary': {
			background: theme.palette.gradient.bottom,
			placeItems: 'center',
			justifyContent: 'center',
			marginLeft: '10px',
		},
	},
	img: {
		height: '40px',
		width: '40px',
		borderRadius: '50%',
		position: 'relative',
	},
	text: {
		marginLeft: '10px',
		fontSize: '10px',
		width: '100px',
	},

	badge: {
		marginLeft: '10px',
	},

	name: {
		fontSize: '10px',
		fontWeight: 'bold',
		whiteSpace: 'nowrap',
	},
	online: {
		color: '#696969',
		fontSize: '10px',
		marginLeft: '15px',
	},

	typing: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	badgeDot: {
		position: 'absolute',
		right: '2px',
		bottom: '10px',
		'& .MuiBadge-colorSecondary': {
			backgroundColor: theme.palette.success.main,
		},
	},
}));

export default function UserCard(props) {
	const classes = useStyles();
	const { avatar, name, isOnline, notification, isTyping } = props.user;
	return (
		<Box className={classes.userlist}>
			<Box className={classes.img}>
				<Avatar alt="" src={avatar}></Avatar>
				{isOnline && <Badge variant="dot" color="secondary" className={classes.badgeDot}></Badge>}
			</Box>
			<Box className={classes.text}>
				<Typography variant="h6" className={classes.name}>
					{name}
				</Typography>
				<Box className={classes.typing}>
					<Typography variant="subtitle1" className={classes.online}>
						{isOnline ? 'online' : 'offline'}
					</Typography>
					{isTyping && (
						<Typography variant="subtitle1" className={classes.online}>
							typing...
						</Typography>
					)}
				</Box>
			</Box>
			{notification !== 0 && (
				<Badge badgeContent={notification} color="primary" className={classes.badge}></Badge>
			)}
		</Box>
	);
}
