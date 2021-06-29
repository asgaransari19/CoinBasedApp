import { Avatar, Box, Drawer, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { pagePaths } from '../../utils/constant';
import useStyles from './style';

export default function CustomDrawer(props) {
	const classes = useStyles();

	const location = useLocation();
	const currentRoute = location.pathname;
	console.log('===> currentRoute: ', currentRoute);
	const menus = [
		{
			index: 0,
			avatar: '/assets/logo/overview.svg',
			text: 'OverView',
			link: pagePaths.overview,
		},
		{
			index: 1,
			avatar: '/assets/logo/trade.svg',
			text: 'Trade',
			link: pagePaths.trade,
		},
		{
			index: 2,
			avatar: '/assets/logo/wallet.svg',
			text: 'Wallet',
			link: pagePaths.wallet,
		},
		{
			index: 4,
			avatar: '/assets/logo/transactions.svg',
			text: 'Transactions',
			link: pagePaths.transactions,
		},

		{
			index: 5,
			avatar: '/assets/logo/statics.svg',
			text: 'Statistics',
			link: pagePaths.statistics,
		},

		{
			index: 6,
			avatar: '/assets/logo/settings.svg',
			text: 'Settings',
			link: pagePaths.settings,
		},
	];

	const renderMenus = () => {
		return menus.map((obj) => (
			<ListItem
				button
				component={NavLink}
				to={obj.link}
				activeClassName={obj.link === currentRoute ? classes.active : ''}
				key={obj.index}
				className={classes.listItem}
			>
				<ListItemAvatar>
					<Avatar src={obj.avatar} variant="square" />
				</ListItemAvatar>
				<ListItemText primary={obj.text} />
			</ListItem>
		));
	};

	return (
		<Drawer className={classes.drawer} variant="permanent" BackdropProps={false}>
			{renderMenus()}

			<Box className={classes.buttoMenu}>
				<ListItem button className={classes.listItem}>
					<ListItemText primary="Referral" />
				</ListItem>

				<ListItem button className={classes.listItem}>
					<ListItemText primary="Logout" />
				</ListItem>
			</Box>
		</Drawer>
	);
}
