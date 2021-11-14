import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import AboutUs from "./pages/AboutUs";
import Main from "./pages/Main";

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Header />
        <Main />
        <Switch>
          <Route
            exact
            path="/"
            render={(matchProps) => <PostList {...matchProps} />}
          />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
