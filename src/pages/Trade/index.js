import React from 'react';
import Layout from '../../components/Layout';
import useStyles from '../../styles/Trade';
import { Box, Grid, Button } from '@material-ui/core';
import UserCard from '../../components/UserCard';
import UserChats from '../../components/UserChats';

const topbarData = {
	text1: 'User management Trade',
	text2: 'Trade',
	text3: 'Account',
	text4: 'Asgar ali',
	noCalender: true,
};

export default function Trade() {
	const classes = useStyles();

	const users = [
		{
			avatar: '/assets/images/anwer.jpeg',
			name: 'Anwer Ansari',
			isOnline: true,
			notification: 0,
			isTyping: false,
		},
		{
			avatar: '/assets/images/irfan.jpeg',
			name: 'irfan Ansari',
			isOnline: true,
			notification: 0,
			isTyping: true,
		},
		{
			avatar: '/assets/images/jahngeer.jpeg',
			name: 'jahngeer Ansari',
			isOnline: false,
			notification: 10,
			isTyping: false,
		},
		{
			avatar: '/assets/images/mukesh.jpeg',
			name: 'mukesh sir',
			isOnline: false,
			notification: 9,
			isTyping: false,
		},
		{
			avatar: '/assets/images/asgar.jpeg',
			name: 'Asgar ali',
			isOnline: true,
			notification: 0,
			isTyping: false,
		},
		{
			avatar: '/assets/images/anwer.jpeg',
			name: 'Anwer Ansari',
			isOnline: true,
			notification: 0,
			isTyping: false,
		},
		{
			avatar: '/assets/images/irfan.jpeg',
			name: 'irfan Ansari',
			isOnline: true,
			notification: 0,
			isTyping: true,
		},
		{
			avatar: '/assets/images/jahngeer.jpeg',
			name: 'jahngeer Ansari',
			isOnline: false,
			notification: 10,
			isTyping: false,
		},
		{
			avatar: '/assets/images/mukesh.jpeg',
			name: 'mukesh sir',
			isOnline: false,
			notification: 9,
			isTyping: false,
		},
		{
			avatar: '/assets/images/asgar.jpeg',
			name: 'Asgar ali',
			isOnline: true,
			notification: 0,
			isTyping: false,
		},
	];

	const renderUserCard = () => {
		return users.map((user, index) => {
			return (
				<div key={index} className={classes.userBox}>
					<UserCard user={user} />
				</div>
			);
		});
	};

	return (
		<Layout topbarData={topbarData}>
			<Box className={classes.root}>
				<Grid container>
					<Grid item lg={3} md={3} sm={3} xs={12} className={classes.userSection}>
						{renderUserCard()}
						<Button type="button" className={classes.newButton}>
							New Trade?
						</Button>
					</Grid>

					<Grid item lg={9} md={9} sm={9} xs={12} className={classes.userChatsSection}>
						<UserChats />
					</Grid>
				</Grid>
			</Box>
		</Layout>
	);
}
