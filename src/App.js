import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';
import './App.css';


class App extends Component { 
    render() {
        return (
           <Router>
                <div className='App'>
                    {/* Menuu */}
                    <Menu></Menu>
                    {/* Noi dung */}
                    <Switch>
                        { this.showContentMenu(routes) }
                    </Switch>
                </div>
           </Router>
        );
    }

    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return(
                    <Route 
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        key={index}
                    ></Route>
                );
            })
        }
        return result;
    }
}
export default (App);
 