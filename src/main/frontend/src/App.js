import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import Login from './components/Login';
import ReviewMain from './components/ReviewMain';
import NavBar from './components/Navbar/Navbar';
import ReviewDetail from './components/ReviewDetail';
import ReviewWrite from './components/ReviewWrite';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

    return (
        <div>
            <Router>
       
                <Switch>
                    {/* exact?? */}
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/menu" component={Menu}></Route>
                    <Route exact path="/review" component={ReviewMain}></Route>
                    <Route exact path="/review/view/:id" component={ReviewDetail}></Route>
                    <Route exact path="/review/write" component={ReviewWrite}></Route>
                </Switch>
            </Router>
        </div>
    );

}

export default App;
