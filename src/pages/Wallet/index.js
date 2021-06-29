import { Card, CardMedia, CardContent, Box, CardActions, Button, Typography, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import useStyles from '../../styles/Wallet';
import CustomWallet from '../../components/CustomWallet';
export default function Wallet() {
	const topbarData = {
		text1: 'User management Wallet',
		text2: 'Wallet',
		text3: 'Account',
		text4: 'Asgar ali',
		noCalender: true,
	};
	const classes = useStyles();
	return (
		<Layout topbarData={topbarData}>
			<CustomWallet />
		</Layout>
	);
}
