// Core
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home } from "../pages/home";
import { SignIn } from "../pages/signin";

// Books
import { books } from "./books";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={books.home}>
          <Home />
        </Route>
        <Route path={books.signin}>
          <SignIn />
        </Route>
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
};
