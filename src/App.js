import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Featured from './components/Featured';
import BestSeller from './components/BestSeller';
import ShopAllBanner from './components/ShopAllBanner';
import GetAll from './components/GetAll';
import ShopBedroom from './components/ShopBedroom';
import Favorites from './components/Favorites';
import ShopAll from './components/ShopAll';
import BannerBottom from './components/BannerBottom';
import Discover from './components/Discover';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Featured />
      <BestSeller />
      <ShopAllBanner />
      <GetAll />
      <ShopBedroom />
      <Favorites />
      <ShopAll />
      <BannerBottom />
      <Discover />
    </div>
  );
}

export default App;
