import React from 'react';
import { Card, CardMedia, CardContent, Box, CardActions, Button, Typography, Grid } from '@material-ui/core';
import useStyles from './style';

export default function CustomWallet() {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image="/assets/logo/trophy-background.svg" title="" />
			<CardActions className={classes.btn}>
				<Button size="small">
					Wallet
				</Button>
				<Button size="small" color="inherit" className={classes.Button}>
					Widhrow Funds
				</Button>
			</CardActions>
			<CardContent className={classes.cardContent}>
				<Box display="flex" justifyContent="space-around"></Box>

				<Grid container>
					<Grid item lg={3} md={4}>
						Grid 1
					</Grid>
					<Grid item lg={4} md={4}>
						<Box className={classes.grid2}>
							<Typography className={classes.price}>#120000.00</Typography>
							<Typography className={classes.text}>please note this's the total sum of ya'</Typography>
							<Typography className={classes.text}>
								transactions here on <b> GOGE AFRICA </b>{' '}
							</Typography>
						</Box>
					</Grid>
					<Grid item lg={4} md={4}  className={classes.grid3}>
						<Box>
							<Typography className={classes.price}>#120000.00</Typography>
							<Typography className={classes.text}>please note this's the total sum of ya'</Typography>
							<Typography className={classes.text}>
								transactions here on <b> GOGE AFRICA </b>{' '}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
