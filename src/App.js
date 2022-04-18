import Home from "./conponent/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./conponent/Navbar";
import Cart from "./conponent/Cart";
import Login from "./conponent/Login";
import SignUp from "./conponent/SignUp";
import { Item } from "./conponent/Item";
import Upload from "./conponent/Upload";
import Donate from "./conponent/Donate";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <Item />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
