import './App.css';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
        <div className='content'>
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
