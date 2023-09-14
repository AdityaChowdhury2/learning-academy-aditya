import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';

const SingleCourse = ({ course, handleSelect, cart, remainingCreditHours }) => {
	const isAdded = cart.find(cartCourse => cartCourse.id === course.id);
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
					<p className="ml-2">Price: {price}</p>
					<FiBookOpen />
					<p className="ml-2">Credit: {creditHours}hr</p>
				</div>
				<button
					className="btn bg-sky-500 text-white capitalize w-full hover:bg-sky-600"
					onClick={() => {
						if (!isAdded && remainingCreditHours >= course.creditHours) {
							handleSelect(course);
							toast.success('Course added successfully');
						} else if (remainingCreditHours < course.creditHours) {
							toast.error(
								'course cannot be added cause remaining is less than course creditHours'
							);
						} else {
							toast.error('Course already added');
						}
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
	cart: PropTypes.array.isRequired,
	remainingCreditHours: PropTypes.number.isRequired,
};

export default SingleCourse;
