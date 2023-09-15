import PropTypes from 'prop-types';

const Cart = ({ cart, totalCreditHours, remainingCreditHours }) => {
	const totalPrice = cart.reduce((prev, cart) => prev + cart.price, 0);
	return (
		<div className="xl:w-1/4 flex-1">
			<div className="bg-base-100 p-6 rounded-lg sticky top-10">
				<h3 className="text-sky-500 font-bold text-lg">
					Credit Hour Remaining {remainingCreditHours} hr
				</h3>
				<div className="divider"></div>
				<h2 className="text-xl font-bold">Course Name</h2>
				<ol className="list-decimal p-6">
					{cart.map(course => (
						<li key={course.id}>{course.courseName}</li>
					))}
				</ol>
				<div className="divider"></div>
				<p className="font-medium text-neutral-800">
					Total Credit Hour: {totalCreditHours}
				</p>
				<div className="divider"></div>
				<p className="font-medium text-neutral-800">
					Total Price: {totalPrice} USD
				</p>
			</div>
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	remainingCreditHours: PropTypes.number.isRequired,
	totalCreditHours: PropTypes.number.isRequired,
};

export default Cart;
