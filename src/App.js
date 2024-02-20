import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import TodoForm from './components/TodoForm';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route path="/TodoForm">
              <TodoForm/>
            </Route>
            </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
