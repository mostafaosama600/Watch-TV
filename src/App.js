// CSS to over right on bootstrap
import './App.css';
// BOotstrap LInks
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/jquery/dist/jquery.min.js"
import "../node_modules/popper.js/dist/umd/popper.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
// Components
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Navbar from './Components/Navbar/Navbar';
import Tv from './Components/Tv/Tv';
import Contact from './Components/Contact/Contact';
import Register from './Components/Reagister/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
// REact ROuter DOm
import { Redirect, Route, Switch } from "react-router-dom"
import SeeMore from './Components/SeeMore/SeeMore';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/Tv" component={Tv} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/seeMore" component={SeeMore} />
        <Redirect exact from="/" to={Home} />
        <Route path="*" component={NotFound} />

      </Switch>

    </>
  );
}
export default App;
