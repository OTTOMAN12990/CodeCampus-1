import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <section className="course-detail">
        <h2 className="not-found">Cursus niet gevonden</h2>
        <Link className="back-link" to="/">← Terug naar overzicht</Link>
      </section>
    );
  }

  return (
    <section className="course-detail">
      <h2 className="course-title">{course.title}</h2>
      <figure className="course-image">
        <img src={course.imageUrl} alt={course.title} />
      </figure>
      <p className="course-description">{course.description}</p>
      <ul className="course-info-list">
        <li><strong>Niveau:</strong> {course.level}</li>
        <li><strong>Duur:</strong> {course.duration}</li>
        <li><strong>Leden:</strong> {course.members}</li>
        <li><strong>Weergaven:</strong> {course.views}</li>
        <li><strong>Beoordeling:</strong> ⭐ {course.rating}</li>
      </ul>
      <a
        className="video-button"
        href={course.videoUrl}
        target="_blank"
        rel="noreferrer"
      >
        Bekijk Video
      </a>
      <br />
      <Link className="back-link" to="/">← Terug naar overzicht</Link>
    </section>
  );
};

export default CourseDetail;
