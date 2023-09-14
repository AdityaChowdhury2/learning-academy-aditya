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
		setCart([...cart, course]);
		setRemainingCreditHours(remainingCreditHours - course.creditHours);
		setTotalCreditHours(totalCreditHours + course.creditHours);
	};

	if (totalCreditHours === 20)
		toast.success(
			'Congratulations you have successfully completed the course registration'
		);
	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setCourses(data));
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
