import SearchForm from '../components/SearchForm';
import flightBg from '/flight_bg.jpg';

function Home() {
  return (
    <div className="home-container">
      <img src={flightBg} alt="Background" className="background-image" />
      <div className="home-content">
        <h1>Explore the world with FlyGlobe</h1>
        <SearchForm />
      </div>
    </div>
  );
}

export default Home;
