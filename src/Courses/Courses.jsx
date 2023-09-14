import PropTypes from 'prop-types';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = ({ courses }) => {
	console.log(courses.length);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-3/4">
			{courses.map(course => (
				<SingleCourse key={course.id} course={course} />
			))}
		</div>
	);
};

Courses.propTypes = {
	courses: PropTypes.array.isRequired,
};

export default Courses;