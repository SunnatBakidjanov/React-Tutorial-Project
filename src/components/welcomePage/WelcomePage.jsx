import { Header } from "../header/Header";
import { WelcomeSlides } from "./UI/slides/WelcomeSlides.jsx";
import { Title } from "./UI/title/Title.jsx";
import { RestaurantFilter } from "./UI/restaurantFilter/RestaurantFilter.jsx";
import { FormButton } from "./UI/formButton/FormButton.jsx";

import { restaurants } from "../../../mock/mock";

import styles from "./welcomePage.module.scss";

export const WelcomePage = () => {
    const updateRestaurants = [...restaurants];

    return (
        <div className={styles.welcomePage}>
            <div className={styles.container}>
                <Header />
                <div className={styles.welcomeContent}>
                    <Title text='Рестораны' style='restaurant' />
                    <WelcomeSlides restaurants={updateRestaurants} />
                    <Title text={"Кухни"} style='cusines' />
                    <RestaurantFilter />
                    <FormButton />
                </div>
            </div>
        </div>
    );
};
