import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./component/Layout";
import { Navigationbar } from "./component/Navigationbar";
import { JumboHeader } from "./component/JumboHeader";


import "./Style.min.css";

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <JumboHeader />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
