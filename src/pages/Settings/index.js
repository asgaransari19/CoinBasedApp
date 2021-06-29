import React from 'react';
import Layout from '../../components/Layout';
import useStyles from '../../styles/settings';
import CardActionArea from '@material-ui/core/CardActionArea';

import {
	FormControl,
	FormHelperText,
	OutlinedInput,
	Box,
	Typography,
	Avatar,
	Card,
	CardMedia,
} from '@material-ui/core';

export default function Settings(props) {
	const topbarData = {
		text1: 'User management settings',
		text2: 'Settings',
		text3: 'Account',
		text4: 'Asgar ali',
		noCalender: true,
	};

	const classes = useStyles();

	const [values, setValues] = React.useState({
		name: '',
		email: '',
		mobileNumber: '',
		countryName: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(name, value);
	};

	return (
		<Layout topbarData={topbarData}>
			<Box className={classes.root}>
				<Box className={classes.topBox}>
					<Typography>profile</Typography>
					<Avatar alt="triangle" src="/assets/logo/oppositeTringle.svg" className={classes.oppositeTringle} />
				</Box>

				<Box className={classes.profile}>
					<Avatar alt="user" src="/assets/images/asgar.jpeg" className={classes.asgar} />
				</Box>

				<Box className={classes.text}>
					<Typography>the uploaded images must be </Typography>
					<Typography>500px wide and 500px long</Typography>
				</Box>

				<Box className={classes.input}>
					<FormControl className={classes.textField} variant="outlined">
						<FormHelperText>Name</FormHelperText>
						<OutlinedInput
							name="name"
							value={values.searchInput}
							onChange={handleChange}
							placeholder="name"
							className={classes.name}
						/>
					</FormControl>
				</Box>

				<Box className={classes.input}>
					<FormControl className={classes.textField} variant="outlined">
						<FormHelperText>Email</FormHelperText>
						<OutlinedInput
							name="email"
							value={values.searchInput}
							onChange={handleChange}
							placeholder="asgar@gmail.com"
							className={classes.name}
						/>
					</FormControl>
				</Box>

				<Box className={classes.input}>
					<FormControl className={classes.textField} variant="outlined">
						<FormHelperText>Phone</FormHelperText>
						<OutlinedInput
							name="mobileNumber"
							value={values.searchInput}
							onChange={handleChange}
							placeholder="+91********"
							className={classes.name}
						/>
					</FormControl>
				</Box>

				<Box className={classes.input}>
					<FormControl className={classes.textField} variant="outlined">
						<FormHelperText>Nationlity</FormHelperText>
						<OutlinedInput
							name="countryName"
							value={values.searchInput}
							onChange={handleChange}
							placeholder="country name"
							className={classes.name}
						>
							<Box></Box>
						</OutlinedInput>
					</FormControl>
				</Box>
				<Box className={classes.button}>
					<button type="button" className={classes.btn}>
						save change
					</button>
				</Box>
				<Box className={classes.middleBox}>
					<Typography>password</Typography>
					<Avatar alt="arrayUp" src="/assets/logo/arrayUp.svg" className={classes.arrayUp} />
				</Box>

				<Box className={classes.thirdBox}>
					<Typography>Billing information</Typography>
					<Avatar
						alt="triangle"
						src="/assets/logo/oppositeTringle.svg"
						className={classes.oppositeTringle2}
					/>
				</Box>
				<Box className={classes.text1}>
					<Typography> fill in the bank information into witch you </Typography>
					<Typography>would want you transactions return and bonuses</Typography>
				</Box>

				<Card className={classes.card}>
					<CardMedia image="/assets/logo/cardbackground.svg" title="this is image" />
				</Card>
				<Box className={classes.button}>
					<button type="button" className={classes.btn}>
						save change
					</button>
				</Box>
			</Box>
		</Layout>
	);
}
