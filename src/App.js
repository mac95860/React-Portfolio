import React  from 'react';
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App () {
  
  return (
   <Router>
     <div>
       <Nav/>
       <Switch>
       <Route exact path={["/", "/aboutme"]}>
         <AboutMe/>
       </Route>
       <Route exact path="/contactme">
         <ContactMe/>
       </Route>
       <Route exact path = "/portfolio">
         <Portfolio/>
       </Route>
       <Route>
         <AboutMe/>
       </Route>
       </Switch>
       <Footer/>
     </div>
   </Router>
  );
}

export default App;
