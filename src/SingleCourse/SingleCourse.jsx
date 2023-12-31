import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';

const SingleCourse = ({ course, handleSelect }) => {
	// console.log(course);
	const { courseImage, courseName, description, creditHours, price } = course;
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure className="px-5 pt-5">
				<img
					src={courseImage}
					alt={`image of ${courseName}`}
					className="rounded-xl w-full"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-lg">{courseName}</h2>
				<p className="text-sm text-justify">{description}</p>

				<div className="flex items-center">
					<BsCurrencyDollar />
					<p className="ml-2 text-sm ">Price: {price}</p>
					<FiBookOpen />
					<p className="ml-2 text-sm">Credit: {creditHours}hr</p>
				</div>
				<button
					className="btn bg-sky-500 text-white capitalize w-full hover:bg-sky-600"
					onClick={() => {
						handleSelect(course);
					}}
				>
					Select
				</button>
			</div>
		</div>
	);
};

SingleCourse.propTypes = {
	course: PropTypes.object.isRequired,
	handleSelect: PropTypes.func.isRequired,
};

export default SingleCourse;
