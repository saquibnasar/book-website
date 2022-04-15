import Home from "./conponent/Home";
// import Item from "./conponent/Item";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./conponent/Navbar";
import Cart from "./conponent/Cart";
import Login from "./conponent/Login";
import SignUpPage1 from "./conponent/SignUpPage1";
import SignUpPage2 from "./conponent/SignUpPage2";
import SignUpPage3 from "./conponent/SignUpPage3";
import { Item } from "./conponent/Item";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/item/:id'>
            <Item />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signuppage1'>
            <SignUpPage1 />
          </Route>
          <Route exact path='/signuppage2'>
            <SignUpPage2 />
          </Route>
          <Route exact path='/signuppage3'>
            <SignUpPage3 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
