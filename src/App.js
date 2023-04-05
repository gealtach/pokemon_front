import './App.css';
import {Landing, Home, Form, Detail} from './Views/index'
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        {location.pathname !== '/' && <NavBar />}
        <Route exact path='/'><Landing/></Route>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/form'><Form/></Route>
        <Route exact path='/pokemons/:id'><Detail/></Route>
    </div>
  );
}

export default App;
