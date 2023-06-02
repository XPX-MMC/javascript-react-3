import React from 'react';
import { Image } from 'react-bootstrap';
import { FoodTable } from '../Components/FoodTable';
import './FoodPage.scss';

export const FoodPage = () => {
	return (
		<div className='FoodPage'>
			<div className='Center_Content'>
				<div className='FoodPage_Header'>Food</div>
				<div className='FoodPage_Content'>
					<FoodTable />
				</div>
				<div className='FoodPage_Content'>
					<div className='FoodPage_Pix'>
						<Image
							width='800px'
							rounded={true}
							fluid={true}
							src='sandwich.jpg'
							alt='sandwich'
						/>
						<br />
						<br />
						<Image
							width='800px'
							rounded={true}
							fluid={true}
							src='croissant.jpg'
							alt='croissant'
						/>
						<br />
						<br />
						<Image
							width='800px'
							rounded={true}
							fluid={true}
							src='cookie.jpg'
							alt='cookie'
						/>
						<br />
						<br />
						<Image
							width='800px'
							rounded={true}
							fluid={true}
							src='parfait.jpg'
							alt='parfait'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
