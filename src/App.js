import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./store";
import Login1 from './components/login1'
import Header from './components/header'
import Menu from './components/menu'
import Paymnet from './components/payment'
import UserDetails from './components/account'
import Transactions from './components/transactions'
import Dashboard from './components/dashboard'
import thunk from 'redux-thunk';
import AboutUs from './components/aboutus'

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {

  const auth = useSelector(x => { return x.Auth });

  return (
    <div>
      <Provider store={store}>
        <Home />
        <Switch>


          {auth.isLoggedIn ?
            <Route path="/menu" exact component={Menu}></Route> : <Route path="/login1" exact component={Login1}>
            </Route>}
          {auth.isLoggedIn ?
            <Route path="/transactions" exact component={Transactions}></Route> : <Route path="/login1" exact component={Login1}>
            </Route>}

          {auth.isLoggedIn ? <Route path="/dashboard" exact component={Dashboard}></Route> : <Route path="/login1" exact component={Login1}></Route>}
          <Route path="/" exact component={Login1}></Route>



        </Switch>

      </Provider>

    </div>
  )
}
export default App