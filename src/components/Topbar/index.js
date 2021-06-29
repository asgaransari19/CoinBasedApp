import { Avatar, Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';

export default function Topbar(props) {
	const { text1, text2, text3, text4, noCalender } = props;
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.leftSection}>
				<Typography>{text1}</Typography>
				<Typography>
					<h3>{text2}</h3>
				</Typography>
			</Box>

			<Box className={classes.rightSection}>
				<Box className={classes.rightBox1}>
					<Typography>{text3} | </Typography>
					<div className={classes.pipe} />
					<Typography>{text4}</Typography>
					<Avatar alt="triangle" src="/assets/logo/Triangle.svg" className={classes.triangle} />
				</Box>

				<Box className={classes.calender}>
					{!noCalender && <Avatar alt="calender" src="/assets/logo/calender.svg" />}
				</Box>
			</Box>
		</Box>
	);
}
