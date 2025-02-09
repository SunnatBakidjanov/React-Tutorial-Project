import { Header } from "../header/Header";
import { WelcomeSlides } from "./UI/slides/WelcomeSlides.jsx";
import { Title } from "./UI/title/Title.jsx";
import { RestaurantFilter } from "./UI/restaurantFilter/RestaurantFilter.jsx";
import { FormButton } from "./UI/formButton/FormButton.jsx";

import { restaurants } from "../../../mock/mock";

import styles from "./welcomePage.module.scss";
import titleStyles from "./scss/title.module.scss";

export const WelcomePage = () => {
    const updateRestaurants = [...restaurants];

    return (
        <div className={styles.welcomePage}>
            <div className={styles.container}>
                <Header />
                <div className={styles.welcomeContent}>
                    <Title text={"Рестораны"} customStyle={titleStyles.title} />
                    <WelcomeSlides restaurants={updateRestaurants} />
                    <Title text={"Кухни"} customStyle={titleStyles.cusinesTitle} />
                    <RestaurantFilter />
                    <FormButton />
                </div>
            </div>
        </div>
    );
};
