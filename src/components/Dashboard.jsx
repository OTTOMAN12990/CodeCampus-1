import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import CourseList from './CourseList';
import PopularCourses from './PopularCourses';
import Statistics from './Statistics';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortOption, setSortOption] = useState('relevant');
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('alles');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Favorieten opslaan in localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Favoriet togglen
  const toggleFavorite = (courseId) => {
    setFavorites((prev) =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Unieke categorieën
  const allCategories = courseData.flatMap(course => course.categories || []);
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['alles', ...uniqueCategories];

  // Filteren, zoeken en sorteren
  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    let filtered = [...courseData];

    if (activeTab === 'beginner') {
      filtered = filtered.filter(course => course.level === 'Beginner');
    } else if (activeTab === 'gevorderd') {
      filtered = filtered.filter(course => course.level === 'Gevorderd');
    }

    if (selectedCategory !== 'alles') {
      filtered = filtered.filter(course => course.categories?.includes(selectedCategory));
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'views') {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sortOption === 'longest') {
      filtered.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
    } else if (sortOption === 'shortest') {
      filtered.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    }

    return filtered;
  };

  return (
    <section className='dashboard'>
      <header className='dashboard-header'>
        <nav className='tab-buttons'>
          <button onClick={toggleTheme} className="theme-toggle">
  {theme === 'light' ? '🌙 Donker' : '☀️ Licht'}
</button>
          <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>Alle Cursussen</button>
          <button className={activeTab === 'beginner' ? 'active' : ''} onClick={() => setActiveTab('beginner')}>Voor Beginners</button>
          <button className={activeTab === 'gevorderd' ? 'active' : ''} onClick={() => setActiveTab('gevorderd')}>Gevorderd</button>
        </nav>

        <input
          type='text'
          placeholder='Zoek op titel of trefwoord...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />

        <div className='sort-options'>
          <label htmlFor='sort'>Sorteer op: </label>
          <select id='sort' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value='relevant'>Relevantie</option>
            <option value='views'>Meest bekeken</option>
            <option value='longest'>Langste duur</option>
            <option value='shortest'>Kortste duur</option>
          </select>
        </div>

        <div className='category-filter'>
          <label htmlFor='category'>Categorie: </label>
          <select id='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      <div className='dashboard-content'>
        <section className='main-content'>
          <h2>
            {activeTab === 'all'
              ? 'Alle Cursussen'
              : activeTab === 'beginner'
                ? 'Cursussen voor Beginners'
                : 'Gevorderde Cursussen'}
          </h2>

          <CourseList 
            courses={filteredCourses()} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
          />
        </section>

        <aside className='sidebar'>
          <PopularCourses courses={courseData} />
          <Statistics courses={courseData} />
        </aside>
      </div>
    </section>
  );
};

// Helper om duur te parsen
const parseDuration = (durationStr) => {
  const hoursMatch = durationStr.match(/(\d+)\s*u/);
  const minutesMatch = durationStr.match(/(\d+)\s*m/);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

export default Dashboard;
