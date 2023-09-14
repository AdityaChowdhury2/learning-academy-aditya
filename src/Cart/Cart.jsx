import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
	return (
		<div className="xl:w-1/4 flex-1">
			<div className="bg-base-100 p-6 rounded-lg">
				<h3 className="text-sky-500 font-bold text-lg">
					Credit Hour Remaining {'0'} hr
				</h3>
				<div className="divider"></div>
				<h2 className="text-xl font-bold">Course Name</h2>
				<ol className="list-decimal p-6">
					<li>asdf</li>
				</ol>
				<div className="divider"></div>
				<p className="font-medium text-neutral-800">
					Total Credit Hour: {'13'}
				</p>
				<div className="divider"></div>
				<p className="font-medium text-neutral-800">
					Total Price: {'2000'} USD
				</p>
			</div>
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.object.isRequired,
};

export default Cart;
