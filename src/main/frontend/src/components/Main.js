import React from 'react';
import ReviewDetail from './ReviewDetail';
import ReviewWrite from './ReviewWrite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReviewMain from './ReviewMain';
import MenuBar from './MenuBar';

const Main = () => {
    return (
        <div>
            <Router>
            <MenuBar></MenuBar>
                <Switch>
                    <Route exact path="/review" component={ReviewMain}></Route>
                    <Route exact path="/review/view/:id" component={ReviewDetail}></Route>
                    <Route exact path="/review/write" component={ReviewWrite}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;