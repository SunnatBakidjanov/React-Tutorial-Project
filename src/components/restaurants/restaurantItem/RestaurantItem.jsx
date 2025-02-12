import { use } from "react";

import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";

import { AuthContext } from "../../contexts/authorization";

export const RestaurantItem = ({ name, menu, reviews }) => {
    const { auth } = use(AuthContext);

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

            {auth.isAuthed ? <ReviewForm /> : null}
        </>
    );
};
