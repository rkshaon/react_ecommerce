import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Featured from './components/Featured';
import BestSeller from './components/BestSeller';
import ShopAll from './components/ShopAll';
import ShopBedroom from './components/ShopBedroom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Featured />
      <BestSeller />
      <ShopAll />
      <BestSeller />
      <ShopBedroom />
    </div>
  );
}

export default App;
