import React from 'react';
import Review from './Review';
import ReviewDetail from './ReviewDetail';
import ReviewWrite from './ReviewWrite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Review}></Route>
                    <Route exact path="/insert" component={ReviewDetail}></Route>
                    <Route exact path="/write" component={ReviewWrite}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;