

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Diet from "./components/diet";
import  {Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/home";
import AddDiet from "./components/addDiet";
import PageNotFound from "./components/pageNotFound";
import DietDetails from "./components/dietdetails";
import Doctors from './components/doctors';
import AddDoctor from './components/addDoctor';
import DoctorDetails from './components/doctorDetails';
import PatientCase from "./components/patientCase";
import AddPatientCase from './components/addPatientCase';
import PatientCaseDetails from "./components/patientCaseDetails";


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
          <Route exact path="/doctor/add" component={AddDoctor}/>
          <Route exact path="/doctor/get/:id" component={DoctorDetails}/>
          <Route exact path="/doctor/update" component={DoctorDetails}/>
          <Route exact path="/doctors" component={Doctors}/>
          <Route path="/patientCase/add" component={AddPatientCase} />
          <Route path="/patientCase/view/:id" component={PatientCaseDetails} />
          <Route path="/patientCase/update/:id" component={PatientCaseDetails} />
          <Route path="/patientCase" component={PatientCase} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
          <Redirect from="/home" to="/"/>
          </Switch>
          
      </div>
    </div>


    
  );
}

export default App;
