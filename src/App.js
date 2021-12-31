import Header from './Header.js';
import './App.css';
import Footer from './Footer';
import Main from './Main.js';
import HelloWorld from './HelloWorld';


function App() {
  return (
    <div className="App"> 
    <ul>
        <Header/>
        <Main/>
        <Footer/>
        <HelloWorld/>
        </ul>
    </div>
  );
}

export default App;
