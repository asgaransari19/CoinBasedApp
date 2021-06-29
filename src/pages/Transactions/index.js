import React from 'react';
import Layout from '../../components/Layout';
import useStyles from '../../styles/transactions';
import { Box, Table, IconButton, Typography, Avatar, Button } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CustomTransaction from '../../components/CustomTransaction';
const topbarData = {
	text1: 'User management Transactions',
	text2: 'Transactions',
	text3: 'Account',
	text4: 'Asgar ali',
	noCalender: true,
};
export default function Transactions() {
	const classes = useStyles();

	// const array = [
	// 	{
	// 		label: 'Date',
	// 		minWidth: '120px',
	// 	},

	// 	{
	// 		label: 'TranjectionsID',
	// 		minWidth: '110px',
	// 	},
	// 	{
	// 		label: 'Type',
	// 		minWidth: '100px',
	// 	},
	// 	{
	// 		label: 'Name',
	// 		minWidth: '90px',
	// 	},
	// 	{
	// 		label: 'Value',
	// 		minWidth: '80px',
	// 	},
	// 	{
	// 		label: 'Return',
	// 		minWidth: '70px',
	// 	},
	// 	{
	// 		label: 'Status',
	// 		minWidth: '80px',
	// 	},
	// 	{
	// 		label: 'Actions',
	// 		minWidth: '70px',
	// 	},
	// ];

	// const rows = [
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'completed',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'failed',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'in-progress',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'completed',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'amazon',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'completed',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'failed',
	// 	},
	// 	{
	// 		id: 1,
	// 		date: '14/01/2019',
	// 		transactionId: '1234567',
	// 		name: 'bitcoin',
	// 		value: '$100',
	// 		return: '#18000',
	// 		status: 'in-progress',
	// 	},
	// ];

	return (
		<Layout topbarData={topbarData}>
		<CustomTransaction />
			{/* <Box className={classes.root}>
				<Box className={classes.label}>
					<Table>
						<TableHead>
							{array.map((array) => (
								<TableCell style={{ minWidth: array.minWidth }}>{array.label}</TableCell>
							))}
						</TableHead>

						<TableBody>
							{rows.map((row, index) => {
								return (
									<TableRow key={index}>
										<TableCell align={array.align}>{row.date}</TableCell>
										<TableCell align={array.align}>{row.transactionId}</TableCell>
										<TableCell align={array.align}>
											<Avatar
												src={`/assets/logo/${row.name}.svg`}
												alt="logo"
												className={classes.typeAvatar}
											/>
										</TableCell>
										<TableCell align={array.align}>{row.name}</TableCell>
										<TableCell align={array.align}>{row.value}</TableCell>
										<TableCell align={array.align}>{row.return}</TableCell>
										<TableCell align={array.align}>
											<Typography
												variant="subtitle1"
												// className={classes.status + ' ' + classes[row.status]}
												className={`${classes.status} ${classes[row.status]}`}
											>
												{row.status}
											</Typography>
										</TableCell>
										<TableCell align={array.align}>
											<IconButton color="inherit">
												<MoreHorizIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Box>
				<Box className={classes.button}>
					<Button className={classes.viewMorebtn}>view more</Button>
				</Box>
			</Box> */}
		</Layout>
	);
}
