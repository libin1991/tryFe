import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import './index.css';
import App from './App';
import Aboutme from './Aboutme';
import Demo from './Demo';

class Nav extends React.Component{
    render(){
        return(
            <div>   
                <App/>
                {this.props.children}
				<div className="footer">Ahri-珊制作</div>
            </div>              
        )
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Demo}/>
            <Route path="/about" component={Aboutme}/>
        </Route>
    </Router>
    ),document.getElementById('root')
);
