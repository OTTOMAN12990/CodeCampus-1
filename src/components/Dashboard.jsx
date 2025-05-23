import { useState } from 'react';
import '../styles/Dashboard.css';
import CourseList from './CourseList';
import PopularCourses from './PopularCourses';
import Statistics from './Statistics';

const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortOption, setSortOption] = useState('relevant');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('alles');

  // ✅ Unieke categorieën ophalen uit array-structuren
  const allCategories = courseData.flatMap(course => course.categories || []);
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['alles', ...uniqueCategories];

  // 🔍 Filter-, zoek- en sorteerlogica
  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    let filtered = [...courseData];

    // Filter op niveau-tab
    if (activeTab === 'beginner') {
      filtered = filtered.filter(course => course.level === 'Beginner');
    } else if (activeTab === 'gevorderd') {
      filtered = filtered.filter(course => course.level === 'Gevorderd');
    }

    // ✅ Filter op categorie-array
    if (selectedCategory !== 'alles') {
      filtered = filtered.filter(course => course.categories?.includes(selectedCategory));
    }

    // Zoekterm
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorteren
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
        {/* Tabs */}
        <nav className='tab-buttons'>
          <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>Alle Cursussen</button>
          <button className={activeTab === 'beginner' ? 'active' : ''} onClick={() => setActiveTab('beginner')}>Voor Beginners</button>
          <button className={activeTab === 'gevorderd' ? 'active' : ''} onClick={() => setActiveTab('gevorderd')}>Gevorderd</button>
        </nav>

        {/* 🔍 Zoekbalk */}
        <input
          type='text'
          placeholder='Zoek op titel of trefwoord...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />

        {/* 🔽 Sorteer-opties */}
        <div className='sort-options'>
          <label htmlFor='sort'>Sorteer op: </label>
          <select id='sort' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value='relevant'>Relevantie</option>
            <option value='views'>Meest bekeken</option>
            <option value='longest'>Langste duur</option>
            <option value='shortest'>Kortste duur</option>
          </select>
        </div>

        {/* 🏷️ Categorieën */}
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

          <CourseList courses={filteredCourses()} />
        </section>

        <aside className='sidebar'>
          <PopularCourses courses={courseData} />
          <Statistics courses={courseData} />
        </aside>
      </div>
    </section>
  );
};

// ⏱️ Helper: duur omzetten naar minuten
const parseDuration = (durationStr) => {
  const hoursMatch = durationStr.match(/(\d+)\s*u/);
  const minutesMatch = durationStr.match(/(\d+)\s*m/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
};

export default Dashboard;
