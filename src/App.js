import './App.css';
import Todo from './components/TodoApp';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Todo />
        </div>
    </div>
  );
}

export default App;
