import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

//styles
import "./styles/app.css";

//Components
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbotron";
import GoogleMaps from "./components/GoogleMaps";
import Todo from "./components/Todo";
import Home from "./components/Home";
import ImageFlip from "./components/ImageFlip";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

const NoPage = () => {
  return (
    <div>
      <h1>404 Error : Page Cannot Be Found</h1>
    </div>
  );
};

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerTogClick = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <NavBar drawerClickHandler={this.drawerTogClick} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Jumbo />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/google-maps" component={GoogleMaps} />
            <Route path="/todo" component={Todo} />
            <Route path="/image-flip" component={ImageFlip} />
            <Route component={NoPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
