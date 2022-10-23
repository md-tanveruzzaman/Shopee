import logo from './logo.svg';
import './App.css';
import { Footer } from './Layout/Footer/Index';
import { Header } from './Layout/Header/Index';
import { HomeCarousel } from './Component/Carousel/Index';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeCarousel />
      <Footer />
    </div>
  );
}

export default App;
