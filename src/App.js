import React from "react";
import ReactDOM from "react-dom";

import Searchparams from "./SearchParams";
import Details from "./Details";
import {Router, Link} from '@reach/router';
const App = () => {
  return (
    
   <div>
       <Link to="/">
           <header> Adopt Me !</header>
       </Link>
       <Router>          
            <Searchparams path= "/"></Searchparams>
            <Details path= "/details/:id"></Details>
       </Router>       
   </div>
   
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
