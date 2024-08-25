import { Route, Router, Switch } from 'wouter'
/* Components Imports */
import Home from '../pages/Home'
import CountryDetails from '../pages/CountryDetails'
import FourOFour from '../components/404'

export default function AppRouter() {
    return (
        <Router>
        <Switch>
            <Route path="/" component={Home}>
            </Route>
            <Route path="/country-details/:countryName" component={CountryDetails}></Route>
            <Route path="*" component={FourOFour}></Route>
        </Switch>
        </Router>
    )
    }