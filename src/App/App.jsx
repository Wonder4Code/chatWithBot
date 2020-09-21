import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../store/store'
import MessagesList from '../components/MessagesList'
import Header from '../components/Header'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/chats" component={MessagesList}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
