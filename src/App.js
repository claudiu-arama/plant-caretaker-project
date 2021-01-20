import './App.scss';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default App;
