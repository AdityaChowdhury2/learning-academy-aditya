import { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Main = () => {
	const [courses, setCourses] = useState([]);
	const [cart, setCart] = useState([]);
	const [remainingCreditHours, setRemainingCreditHours] = useState(20);
	const [totalCreditHours, setTotalCreditHours] = useState(0);
	const handleSelect = course => {
		const isExist = cart.find(cartCourse => cartCourse.id === course.id);
		const totalCreditHoursNow = totalCreditHours + course.creditHours;
		if (!isExist && remainingCreditHours >= course.creditHours) {
			toast.success('Course Added successfully');
			setCart([...cart, course]);
			setRemainingCreditHours(remainingCreditHours - course.creditHours);
			setTotalCreditHours(totalCreditHoursNow);
		} else if (isExist) {
			toast.error('Course already exists');
		} else {
			toast.error('Course Credit Hours is not available');
		}
		if (totalCreditHoursNow === 20) {
			toast.success(
				'Congratulations You have successfully completed the course Registration process'
			);
		}
	};

	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => {
				setCourses(data);
			});
	}, []);
	return (
		<div className="container flex flex-col-reverse xl:flex-row gap-6">
			<Courses
				courses={courses}
				handleSelect={handleSelect}
				cart={cart}
				remainingCreditHours={remainingCreditHours}
			/>
			<Cart
				cart={cart}
				remainingCreditHours={remainingCreditHours}
				totalCreditHours={totalCreditHours}
			/>
		</div>
	);
};

export default Main;
