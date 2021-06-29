import React from 'react';
import Topbar from '../../components/Topbar';
import Layout from '../../components/Layout';
import useStyles from '../../styles/overview';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Box, Grid, Table, Typography, Button } from '@material-ui/core';
import OverviewCard from '../../components/OverviewCard';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomWallet from '../../components/CustomWallet';
import CustomTransaction from '../../components/CustomTransaction';
export default function Overview(props) {
	const classes = useStyles();

	const topbarData = {
		text1: 'User management Overview',
		text2: 'Overview',
		text3: 'Account',
		text4: 'Asgar ali',
		noCalender: false,
	};

	const array = [
		{
			id: 1,
			text: 'Total Number Of Transaction',
			total: '15000',
			status: 'increment',
			statusValue: '22.8%',
		},
		{
			id: 2,
			text: 'Total Number Of Trade',
			total: '43498',
			status: 'decrement',
			statusValue: '11.8%',
		},
		{
			id: 3,
			text: 'Market Rate Value',
			total: '87%',
			status: 'decrement',
			statusValue: '11.8%',
		},
	];

	const tableHead = [
		{
			label: 'iTunesCard',
		},
		{
			label: '',
		},
		{
			label: 'AmazonCard',
		},
		{
			label: '',
		},
		{
			label: 'Bitcoin',
		},
		{
			label: '',
		},
	];

	const rows = [
		{
			number: '1234567',
			name: 'USA Physical',
			bitcoin: 'bitcoinBTC',
		},
		{
			number: '1234567',
			name: 'USA E-Code card',
			bitcoin: 'bitcoinBTC',
		},
		{
			number: '1234567',
			name: 'UK Physical Card',
			bitcoin: 'bitcoinBTC',
		},
		{
			number: '1234567',
			name: 'UK E-Code Card',
			bitcoin: 'bitcoinBTC',
		},
	];

	const renderArrays = () => {
		return array.map((obj, index) => {
			return (
				<Grid item lg={4} md={4} sm={4} xs={12} key={index}>
					{/* <OverviewCard {...obj} /> */}
					<OverviewCard {...obj} />
				</Grid>
			);
		});
	};

	return (
		<Layout topbarData={topbarData}>
			<Grid container spacing={4}>
				{renderArrays()}
			</Grid>

			<Box className={classes.root}>
				<Typography varriant="subtital" className={classes.Typography}>
					Conversion Rate to Naira
				</Typography>
				<Box className={classes.label}>
					<Table className={classes.table}>
						<TableHead>
							{tableHead.map((head) => (
								<TableCell>{head.label}</TableCell>
							))}
						</TableHead>
						<TableBody>
							{rows.map((row, index) => {
								return (
									<TableRow key={index}>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.name}
										</TableCell>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.number}
										</TableCell>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.name}
										</TableCell>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.number}
										</TableCell>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.bitcoin}
										</TableCell>
										<TableCell align={tableHead.align} className={classes.itunecolum}>
											{row.number}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
					<Button className={classes.tableButton}>
						<ArrowForwardIcon />
					</Button>
				</Box>
			</Box>
			<CustomTransaction />
			<CustomWallet />
		</Layout>
	);
}
