import { restaurants } from "../../../mock/mock";
import { Menu } from "./menu/Menu";

export const Restaurants = () => {
    return (
        <div className='restaurants'>
            <h1 className='main-title' style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid gray", height: "50px" }}>
                Рестораны
            </h1>
            <ul className='restaurants__list'>
                {restaurants.map(restaurant => (
                    <li className='restaurants__item' key={restaurant.id}>
                        <h2 className='restaurants__name'>{restaurant.name}</h2>

                        <div className='restaurants__menu-box'>
                            <h3 className='restaurants__menu-title'>Меню</h3>

                            <Menu menu={restaurant.menu} />
                        </div>

                        <div className='restaurants__reviews-box'>
                            <h3 className='restaurants__reviews-title'>Отзывы</h3>

                            <ul className='restaurants__reviews-list'>
                                {restaurant.reviews.map(review => (
                                    <li className='restaurants__review' key={review.id}>
                                        <p className='restaurants__user-name'>{`Name: ${review.user}`}</p>
                                        <p className='restaurants__reviews-text'>{`Review: ${review.text}`}</p>
                                        <p className='restaurants__reviews-rating'>{`Rating: ${review.rating}`}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
