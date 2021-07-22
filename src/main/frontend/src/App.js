import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import Login from './components/Login';
import ReviewMain from './components/ReviewMain';
import NavBar from './components/Navbar/Navbar';
import ReviewDetail from './components/ReviewDetail';
import ReviewWrite from './components/ReviewWrite';
import Menu from './components/Menu/Menu';
// import Signin from './components/Signin';
import Signin from './components/Signin/Sginin';
import Footer from './components/Footer/Footer';

const App = () => {

    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    {/* exact?? */}
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/menu" component={Menu}></Route>
                    <Route exact path="/review" component={ReviewMain}></Route>
                    <Route exact path="/review/view/:id" component={ReviewDetail}></Route>
                    <Route exact path="/review/write" component={ReviewWrite}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );

}

export default App;
