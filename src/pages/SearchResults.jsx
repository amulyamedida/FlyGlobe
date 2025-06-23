import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import flightImage from '/flight.jpg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query');

  return (
    <div className="search-results-page">
      <h2>Search Results for "{query}"</h2>
      <div className="card-list">
        <Card title="Flight A" subtitle="Details of Flight A" image={flightImage} />
        <Card title="Flight B" subtitle="Details of Flight B" image={flightImage} />
      </div>
    </div>
  );
}

export default SearchResults;
