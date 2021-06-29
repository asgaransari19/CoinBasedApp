import {
	AppBar,
	Avatar,
	Badge,
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	Toolbar,
	Typography,
	Input,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuOpen as MenuOpenIcon } from '@material-ui/icons';

import React from 'react';
import useStyles from './styles';

export default function Header(props) {
	const classes = useStyles();
	const { drawerOpen, setDrawerOpen } = props;

	const [values, setValues] = React.useState({
		searchInput: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<AppBar position="fixed" className={classes.root} color="inherit">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={() => setDrawerOpen(!drawerOpen)}
				>
					{drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
				</IconButton>
				<Avatar
					alt="logo"
					src="/assets/logo/coinbased-logo.svg"
					variant="square"
					className={classes.logoAvatar}
				/>
				<Box flexGrow={1} />
				<div className={classes.search}>
					<FormControl className={classes.textField}>
						<Input
							name="searchInput"
							value={values.searchInput}
							onChange={handleChange}
							startAdornment={
								<InputAdornment position="end">
									<img src="/assets/logo/Search-Icon.svg" alt="SearchIcon" />
								</InputAdornment>
							}
							placeholder="Search..."
						/>
					</FormControl>
				</div>

				<Box className={classes.rightMenus} display="flex" alignItems="center">
					<Box className={classes.userProfile} display="flex" alignItems="center">
						<Avatar alt="user" src="/assets/images/asgar.jpeg" />
						<Typography variant="body1"> Asgar Ali </Typography>
					</Box>
					<IconButton>
						<Badge badgeContent={10} className={classes.badge}>
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
