import { DishContainer } from "../dish/DishContainer";

export const Menu = ({ menuId }) => {
    return (
        <ul>
            {menuId.map(id => {
                return (
                    <li key={id}>
                        <DishContainer id={id} />
                    </li>
                );
            })}
        </ul>
    );
};
