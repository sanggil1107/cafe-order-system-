import React from 'react';
import ReviewDetail from './ReviewDetail';
import ReviewWrite from './ReviewWrite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReviewMain from './ReviewMain';

const Main = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={ReviewMain}></Route>
                    <Route exact path="/write/:id" component={ReviewDetail}></Route>
                    <Route exact path="/write" component={ReviewWrite}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;