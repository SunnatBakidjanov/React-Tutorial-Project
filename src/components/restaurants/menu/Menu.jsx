import { Dish } from "../dish/Dish";
import { validateDish } from "./validateDish";

export const Menu = ({ menu }) => {
    return (
        <ul className='menu'>
            {menu.map(dish => {
                const validatedDish = validateDish(dish);

                return (
                    <li className='menu-item' key={validatedDish.id}>
                        <Dish dish={validatedDish.name} price={validatedDish.price} ingredients={validatedDish.ingredients} />
                    </li>
                );
            })}
        </ul>
    );
};
