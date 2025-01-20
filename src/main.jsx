import { createRoot } from 'react-dom/client';
import { restaurants } from '../mock/mock';

const rootElement = document.getElementById('root');

const reactRoot = createRoot(rootElement);

reactRoot.render(
	<ul className="restaurants">
		{restaurants.map(restaurant => (
			<li className="restaurants__item" key={restaurant.id}>
				<h2 className="restaurants__name">{restaurant.name}</h2>

				<div className="restaurants__menu-box">
					<h3 className="restaurants__menu-title">Меню</h3>

					<ul className="restaurants__dish-list">
						{restaurant.menu.map(dish => (
							<li className="restaurants__dish" key={dish.id}>
								{dish.name}
							</li>
						))}
					</ul>
				</div>

				<div className="restaurants__reviews-box">
					<h3 className="restaurants__reviews-title">Отзывы</h3>

					<ul className="restaurants__reviews-list">
						{restaurant.reviews.map(review => (
							<li className="restaurants__review" key={review.id}>
								<p className="restaurants__user-name">{`Name: ${review.user}`}</p>
								<p className="restaurants__reviews-text">{`Review: ${review.text}`}</p>
								<p className="restaurants__reviews-rating">{`Rating: ${review.rating}`}</p>
							</li>
						))}
					</ul>
				</div>
			</li>
		))}
	</ul>
);
