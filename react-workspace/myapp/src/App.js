

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Diet from "./components/diet";
import  {Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/home";
import AddDiet from "./components/addDiet";
import PageNotFound from "./components/pageNotFound";
import DietDetails from "./components/dietdetails";

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route path="/diet/add" component={AddDiet} />
          <Route path="/diet/update/:id" component={DietDetails} />
          <Route path="/diet/view/:id" component={DietDetails} />
          <Route path="/diet" component={Diet} />
          <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/"
          />
    
          <Route component={PageNotFound} />
          </Switch>
      </div>
    </div>


    
  );
}

export default App;
