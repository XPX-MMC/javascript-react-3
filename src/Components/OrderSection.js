import React from 'react';
import { formatUSD } from '../Util/Money';
import { OrderTable } from './OrderTable';
import '../Styles/OrderSection.scss';

export const OrderSection = ({ total, order, foodTotal, foodOrder }) => {
	return (
		<div className='OrderSection'>
			<div className='OrderSection_Title'>Your Order</div>
			{(total > 0 || foodTotal > 0) && (
				<>
					<strong>Drinks</strong>
					<OrderTable completeOrder={order} />

					<strong>Food</strong>
					<OrderTable completeOrder={foodOrder} />
				</>
			)}
			{total === 0 && foodTotal === 0 && <>Your cart is empty.</>}
			<hr />
			<div className='OrderSection_Total'>
				Total:<span>{formatUSD(total + foodTotal)}</span>
			</div>
		</div>
	);
};
