
import './App.css';
import UpdateDocument from './pages/upadateDocument';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"; 
import Edit from './edit';
function App() {
  return (
    <div >
      {/* <Router>
      <Switch>
        <Route exact path="/" component={UpdateDocument}/>
        <Route path ="/edit" component={Edit}/>
      </Switch>
     </Router> */
     }
     <UpdateDocument/>
    </div>
  );
}

export default App;
