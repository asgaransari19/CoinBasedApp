import React from 'react';

import { Card, CardContent, Avatar, Box, Typography, IconButton, Image } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';
import useStyles from './styles';

export default function OverviewCard(props) {
	const classes = useStyles();
	const { text, total, status, statusValue } = props;
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<IconButton aria-label="settings" className={classes.moreButton}>
					<MoreHorizIcon />
				</IconButton>
				<Box className={classes.avatarBox}>
					<Avatar alt="logo" src="/assets/logo/card_logo.svg" className={classes.avatar} />
					<Typography>{total}</Typography>
				</Box>
				<Box className={classes.textBox}>
					<Box className={classes.bigText}>
						<Typography variant="h5">{text}</Typography>
					</Box>
					<Box className={classes.smallText}>
						<Box className={classes.triangleText}>
							<Typography variant="h8">{statusValue}</Typography>
							{ status === 'increment' && <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" />}
							{ status === 'decrement' && <Avatar alt="l ogo" src="/assets/logo/downgreenlogo.svg" />}
							{/* { status === 'increment' ? <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" /> : <Avatar alt="logo" src="/assets/logo/trianglegreen.svg" />} */}
						</Box>
						<Avatar alt="logo" src="/assets/logo/green_graph.svg" className={classes.logo} />
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
