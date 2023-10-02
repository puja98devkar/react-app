import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import { Switch } from 'react-router-dom';
import { Route ,Redirect} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Switch>

      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/service' component={Service}></Route>
      <Redirect to='/
      '></Redirect>
     </Switch>
     <Footer></Footer>
   
    </>
  );
}

export default App;
