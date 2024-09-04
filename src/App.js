
import './scss/index.scss';
import NavBar from './compenents/navbar';

import Router from './router';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Router/>
      </header>
    </div>
  );
}

export default App;
