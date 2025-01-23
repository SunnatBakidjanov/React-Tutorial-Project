import { Dish } from "../dish/Dish";

export const Menu = ({ menu }) => {
    return (
        <ul className='menu'>
            {menu.map(dish => {
                if (!dish.name && dish.name.trim() === "") {
                    console.error(`Ошибка: У блюда с id ${dish.id} отсутствует имя.`);
                    return null;
                }

                if (!dish.price) {
                    console.error(`Ошибка: У блюда с id ${dish.id} отсутствует цена.`);
                    return null;
                }

                if (!dish.ingredients || !dish.ingredients.length) {
                    console.error(`Ошибка: У блюда с id ${dish.id} отсутсвуют ингридиенты`);
                    // так можно делать?я не мутировал пропсы!вроде как)
                    dish.ingredients = "ингредиенты пока не добавлены но они скоро появятся";
                }

                return (
                    <li className='menu__item' key={dish.id}>
                        <Dish dish={dish.name} price={dish.price} ingredients={dish.ingredients} />
                    </li>
                );
            })}
        </ul>
    );
};
