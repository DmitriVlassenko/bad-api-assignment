import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Gloves from "./gloves";
import Facemasks from "./facemasks";
import Beanies from "./beanies";
import Details from "./details";

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/gloves"} component={Gloves} />
            <Route path={"/facemasks"} component={Facemasks} />
            <Route path={"/beanies"} component={Beanies} />
            <Route path={"/details/:id"} component={Details}/>
          </Switch>
        </div>
      </Router>
  );
}

const Home = () => (
    <div>
      <h1>Home Page</h1>
      <p>In case of CORS error</p>
      <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related" target={'_blank'}>Chrome extension</a>
    </div>
);

export default App;
