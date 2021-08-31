import logo from "./logo.svg";
import "./App.css";
import { Login } from "./container/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import UsersList from "./container/users-list/UsersList";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector(state => state.login.success)
  debugger

  return (
    <div className="App container">
      <Router>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink className="nav-item" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <PrivateRoute path="/users" isLogin={isLogin} component={UsersList}  exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
