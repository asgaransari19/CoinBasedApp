import React from 'react';
import useStyles from './style';
import { Box, Typography, InputAdornment, Input, Button, Avatar } from '@material-ui/core';

export default function UserChats() {
	const classes = useStyles();

	const userChats = [
		{
			username: 'Me',
			time: '10:22',
			message: "hello i'm new to this system can i get a breakdown on how it work?",
		},
		{
			username: 'asgar',
			time: '10:23',
			message: 'yes we currently run',
		},
		{
			username: 'Me',
			time: '3min ago',
			message: 'please,can u go into detais about the servis',
		},
		{
			username: 'asgar',
			time: '9min ago',
			message: 'hello wht happened?',
		},
		{
			username: 'Me,',
			time: '3min ago',
			message: 'hello .....?',
		},
		{
			username: 'asgar',
			time: '11:00',
			message: "hello i'm new to this system can i get a breakdown on how it work?",
		},
		{
			username: 'Me,',
			time: 'just now',
			message: 'wlc thanks',
		},
	];

	const renderChat = () => {
		return userChats.map((chat, index) => (
			<Box className={classes.chat} key={index}>
				<Typography variant="subtitle1" className={classes.time}>
					{chat.username} {chat.time}
				</Typography>
				<Typography variant="subtitle1" className={classes.text}>
					{chat.message}
				</Typography>
			</Box>
		));
	};
	return (
		<div className={classes.root}>
			<div className={classes.chats}>{renderChat()}</div>
			<Box className={classes.message}>
				<Input placeholder="start typing here" className={classes.input}></Input>
				<Avatar alt="" variant="square" src="/assets/logo/unname.svg" />
				<Button className={classes.sendButton}>send</Button>
			</Box>
		</div>
	);
}
