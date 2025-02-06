import { Header } from "../header/Header";
import { WelcomeSlider } from "./UI/slider/WelcomeSlider.jsx";
import { Title } from "./UI/title/Title.jsx";

import { restaurants } from "../../../mock/mock";

import styles from "./welcomePage.module.scss";
import { CuisinesTitle } from "./UI/cuisinesTitle/CuisinesTitle.jsx";
import { RestaurantFilter } from "./UI/restaurantFilter/RestaurantFilter.jsx";
import { FormButton } from "./UI/formButton/FormButton.jsx";

export const WelcomePage = () => {
    return (
        <>
            <div className={styles.welcomePage}>
                <div className='container'>
                    <Header />
                    <div className={styles.welcomeContent}>
                        <Title />
                        <WelcomeSlider restaurants={restaurants} />
                        <CuisinesTitle />
                        <RestaurantFilter />
                        <FormButton />
                    </div>
                </div>
            </div>
        </>
    );
};
