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
	if (totalCreditHours > 20) {
		toast.error('You can not add any course');
	}
	if (remainingCreditHours < 0) {
		toast.error('You credit hour is fulfilled');
	}
	console.log(totalCreditHours, remainingCreditHours);
	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setCourses(data));
	}, []);
	return (
		<div className="container flex flex-col-reverse xl:flex-row gap-6">
			<Courses courses={courses} handleSelect={handleSelect} />
			<Cart cart={cart} />
		</div>
	);
};

export default Main;
