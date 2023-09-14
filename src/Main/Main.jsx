import { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Main = () => {
	const [courses, setCourses] = useState([]);
	const [cart, setCart] = useState([]);
	const handleSelect = course => {
		console.log(course.courseName);
		setCart([...cart, course]);
	};
	useEffect(() => {
		fetch('data.json')
			.then(res => res.json())
			.then(data => setCourses(data));
	}, []);
	return (
		<div className="container flex flex-col-reverse xl:flex-row gap-6">
			<Courses courses={courses} handleSelect={handleSelect} />
			<Cart />
		</div>
	);
};

export default Main;
