import './App.css';
import Todo from './components/TodoApp';
import NavBar from './components/NavBar';
import { BrowserRouter as Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <Route>
    <div className="App">
      <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path ="/">
              <Todo />
            </Route>
            <Route path="/TodoForm">
              <TodoForm/>
            </Route>
            </Switch>
        </div>
    </div>
    </Route>
  );
}

export default App;
