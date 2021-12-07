import "./App.css";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/blogposts">
          <BlogPosts />
        </Route>
        <Route path="/gitprojects">
          <GitProjects />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
