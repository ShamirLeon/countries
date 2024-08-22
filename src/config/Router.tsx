import { Route, Router, Switch } from 'wouter'
/* Components Imports */
import Home from '../pages/Home'
import CountryDetails from '../pages/CountryDetails'

export default function AppRouter() {
    return (
        <Router>
        <Switch>
            <Route path="/" component={Home}>
            </Route>
            <Route path="/:id" component={CountryDetails}></Route>
        </Switch>
        </Router>
    )
    }