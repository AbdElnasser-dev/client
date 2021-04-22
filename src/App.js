import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Alert from './components/alert/Alert';
import PageRender from './customRouter/PageRender';
import Header from './components/header/Header';
import Register from './pages/register'
import Login from './pages/login';
import Home from './pages/home';
import {useSelector, useDispatch} from 'react-redux';
import {refershToken} from './redux/action/authAction';
import PrivateRouter from './customRouter/PrivateRouter';
function App() {
  const {auth} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refershToken());
  }, [dispatch]);
  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          
          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
