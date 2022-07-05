//import logo from './logo.svg';
import './components/navbar/navbar.css';
import './components/footer/footer.css';
import './components/body/body.css'

import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
