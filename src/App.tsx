import {BrowserRouter as Router} from 'react-router-dom';
// import Navbar from './components/Navbar.js';
import AppRouter from './routers/AppRouter';

const App=()=> {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
