import { use } from "react";

import { Menu } from "../menu/Menu";
import { ReviewsContainer } from "../reviews/ReviewsContainer";
import { ReviewForm } from "../review-form/ReviewForm";

import { AuthContext } from "../../contexts/authorization";

export const RestaurantItem = ({ name, menuId, reviewsIds }) => {
    const { auth } = use(AuthContext);

    return (
        <>
            <h2 className='restaurants-name'>{name}</h2>
            <div className='menu-box'>
                <h3 className='menu-title'>Меню</h3>

                {menuId.length ? <Menu menuId={menuId} /> : <p>Тут должно быть меню</p>}
            </div>

            <div className='reviews-box'>
                <h3 className='reviews-title'>Отзывы</h3>

                {reviewsIds.length ? reviewsIds.map(id => <ReviewsContainer key={id} id={id} />) : <p>Нет комментариев</p>}
            </div>

            {auth.isAuthed ? <ReviewForm /> : null}
        </>
    );
};
