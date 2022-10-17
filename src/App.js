import logo from './logo.svg';
import './App.css';

import Navbar from "./views/navbar/navbar"
import ContentView from "./views/contentView/contentView"

//import Navbar from '.views/navbar/navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <ContentView />

    </div>
  );
}

export default App;
