import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { pagePaths } from './utils/constant';
import Overview from './pages/Overview';
import Trade from './pages/Trade';
import Wallet from './pages/Wallet';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';


function App() {
	return (
		<Router>
			<Switch>
				<Redirect exact path={pagePaths.root} to={pagePaths.overview} />
				<Route path={pagePaths.overview} component={Overview} />
				<Route path = {pagePaths.trade} component = {Trade} />
				<Route path = {pagePaths.wallet} component = {Wallet} />
				<Route path = {pagePaths.transactions} component = {Transactions} />
				<Route path = {pagePaths.statistics} component = {Statistics} />
				<Route path =  {pagePaths.settings} component = {Settings} />
			</Switch>
		</Router>
	);
}

export default App;
