import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Featured from './components/Featured';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Featured />
    </div>
  );
}

export default App;
