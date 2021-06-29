import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import CustomDrawer from '../CustomDrawer';
import Header from '../Header';
import Topbar from '../../components/Topbar';

const useStyles = makeStyles((theme) => ({
	temporaryBox: {
		display: 'block',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	drawerBox: (drawerOpen) => ({
		display: 'block',
		[theme.breakpoints.down('sm')]: (drawerOpen) => ({
			display: drawerOpen ? 'block' : 'none',
		}),
	}),
	childrenBox: {
		padding: '20px 60px 0 60px',
		width: '100%',
		overflowX: 'hidden',
	},
}));
export default function Layout(props) {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const classes = useStyles(drawerOpen);
	const { topbarData } = props;

	return (
		<>
			<Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
			<Box height="65px" />
			<div className={classes.drawerBox}>
				<CustomDrawer />
			</div>
			<Box display="flex" alignItems="flex-start">
				<Box width="200px" className={classes.temporaryBox} />
				<Box flexGrow={1} className={classes.childrenBox}>
					<>
						<Topbar {...topbarData} />
						{props.children}
					</>
				</Box>
			</Box>
		</>
	);
}
