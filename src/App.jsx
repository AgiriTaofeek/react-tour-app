import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const URL = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const fetchTour = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  let frontJSX;

  if (loading) {
    frontJSX = <Loading />;
  } else if (tours.length === 0) {
    frontJSX = (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTour}>
          refresh
        </button>
      </div>
    );
  } else {
    frontJSX = <Tours tours={tours} onRemove={removeTour} />;
  }

  return <main>{frontJSX}</main>;
}

export default App;
