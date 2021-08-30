import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Main from './components/Main';
import Login from './components/Login';
import BoardMain from './components/Board/BoardMain';
import NavBar from './components/Navbar/Navbar';
import BoardDetail from './components/Board/BoardDetail';
import BoardWrite from './components/Board/BoardWrite';
import Menu from './components/Menu/Menu';
import Signin from './components/Signin/Signin';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Coffee from './components/Coffee/Coffee';
import Store from './components/Store/Store';
import FoodMenu from './components/Menu/FoodMenu';
import DrinkMenu from './components/Menu/DrinkMenu';
import ProductMenu from './components/Menu/ProductMenu';
import Event from './components/News/Event';
import Notice from './components/News/Notice';
import CoffeeMenu from './components/Coffee/CoffeeMenu';
import CoffeeFinder from './components/Coffee/CoffeeFinder';
import CoffeeStory from './components/Coffee/CoffeeStory';
import Up from './components/Signin/SignUp';

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
                {/* <Nav /> */}
                <Switch>
                    {/* exact?? */}
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/menu" component={Menu}></Route>
                    <Route exact path="/menu/food_menu" component={FoodMenu}></Route>
                    <Route exact path="/menu/drink_menu" component={DrinkMenu}></Route>
                    <Route exact path="/menu/product_menu" component={ProductMenu}></Route>
                    <Route exact path="/coffee" component={Coffee}></Route>
                    <Route exact path="/coffee/coffee_menu" component={CoffeeMenu}></Route>
                    <Route exact path="/coffee/coffee_finder" component={CoffeeFinder}></Route>
                    <Route exact path="/coffee/coffee_story" component={CoffeeStory}></Route>
                    <Route exact path="/store" component={Store}></Route>
                    <Route exact path="/news" component={News}></Route>
                    <Route exact path="/news/event" component={Event}></Route>
                    <Route exact path="/news/notice" component={Notice}></Route>
                    <Route exact path="/news/board" component={BoardMain}></Route>
                    <Route exact path="/news/board/view/:id" component={BoardDetail}></Route>
                    <Route exact path="/news/board/write" component={BoardWrite}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );

}

export default App;
