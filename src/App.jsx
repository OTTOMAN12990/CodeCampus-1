import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseDetail from './components/CourseDetail';
import { courses } from './data/coursesData.js';
import './styles/App.css';

function App() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        setCourseData(courses);
        setIsLoading(false);
      } catch (err) {
        setError('Er is een fout opgetreden bij het laden van de cursussen.');
        setIsLoading(false);
      }
    };

    setTimeout(fetchData, 1000);
  }, []);

  return (
    <Router>
      <main className='app'>
        <header className='app-header'>
          <div className='logo-container'>
            <h1 className='brand-logo'>CodeCampus</h1>
            <p className='brand-tagline'>Ontdek, Leer, Excelleer</p>
          </div>
        </header>

        {isLoading ? (
          <section className='loading'>Cursussen worden geladen...</section>
        ) : error ? (
          <section className='error'>{error}</section>
        ) : (
          <Routes>
            <Route path='/' element={<Dashboard courseData={courseData} />} />
            <Route path='/course/:id' element={<CourseDetail courses={courseData} />} />
          </Routes>
        )}
      </main>
    </Router>
  );
}

export default App;
