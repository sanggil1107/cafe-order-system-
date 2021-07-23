import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Main from './components/Main';
import Login from './components/Login';
import BoardMain from './components/BoardMain';
import NavBar from './components/Navbar/Navbar';
import BoardDetail from './components/BoardDetail';
import BoardWrite from './components/BoardWrite';
import Menu from './components/Menu/Menu';
import Signin from './components/Signin/Sginin';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Coffee from './components/Coffee/Coffee';
import Store from './components/Store';

const App = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Router>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>
                <Switch>
                    {/* exact?? */}
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/menu" component={Menu}></Route>
                    <Route exact path="/coffee" component={Coffee}></Route>
                    <Route exact path="/store" component={Store}></Route>
                    <Route exact path="/news" component={News}></Route>
                    <Route exact path="/board" component={BoardMain}></Route>
                    <Route exact path="/board/view/:id" component={BoardDetail}></Route>
                    <Route exact path="/board/write" component={BoardWrite}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );

}

export default App;
