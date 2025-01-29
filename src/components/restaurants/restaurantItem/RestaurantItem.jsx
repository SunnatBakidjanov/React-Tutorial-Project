import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";

export const RestaurantItem = ({ name, menu, reviews }) => {
    return (
        <>
            <h2 className='restaurants-name'>{name}</h2>

            <div className='menu-box'>
                <h3 className='menu-title'>Меню</h3>

                <Menu menu={menu} />
            </div>

            <div className='reviews-box'>
                <h3 className='reviews-title'>Отзывы</h3>

                <Reviews reviews={reviews} />
            </div>

            <ReviewForm />
        </>
    );
};
