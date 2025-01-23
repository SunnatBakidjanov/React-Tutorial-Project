import { Dish } from "../dish/Dish";

export const Menu = ({ menu }) => {
    return (
        <ul className='menu'>
            {menu.map(dish => (
                <li className='menu__item' key={dish.id}>
                    <Dish dish={dish.name} price={dish.price} ingredients={dish.ingredients} />
                </li>
            ))}
        </ul>
    );
};
