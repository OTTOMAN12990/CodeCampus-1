import { Link } from 'react-router-dom';
import '../styles/CourseCard.css';

const CourseCard = ({ course, isFavorite, onToggleFavorite }) => {
  if (!course) {
    return (
      <article className='course-card empty'>
        Geen cursus informatie beschikbaar
      </article>
    );
  }

  return (
    <article className='course-card'>
      <button 
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} 
        onClick={() => onToggleFavorite(course.id)}
        aria-label={isFavorite ? "Verwijder favoriet" : "Voeg toe aan favorieten"}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      
      <Link to={`/course/${course.id}`} className='course-link'>
        <figure className='course-image'>
          <img src={course.imageUrl} alt={course.title} />
        </figure>
        <div className='course-content'>
          <h3>{course.title}</h3>
          <p className='course-description'>{course.description}</p>
          <dl className='course-details'>
            <div>
              <dt className='visually-hidden'>Niveau</dt>
              <dd className='level'>Niveau: {course.level}</dd>
            </div>
            <div>
              <dt className='visually-hidden'>Duur</dt>
              <dd className='duration'>Duur: {course.duration}</dd>
            </div>
          </dl>
          <footer className='course-stats'>
            <span className='members'>{course.members} leden</span>
            <span className='views'>{course.views} weergaven</span>
            <span className='rating'>⭐ {course.rating}</span>
          </footer>
        </div>
      </Link>
    </article>
  );
};

export default CourseCard;

