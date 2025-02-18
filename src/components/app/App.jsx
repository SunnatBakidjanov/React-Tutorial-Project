import { Provider } from "react-redux";
import { store } from "../redux/store";

import { Layout } from "../layout/Layout";
import { RestaurantContainer } from "../restaurants/RestaurantsContainer";
import { ThemeContextProvider } from "../contexts/theme/ThemeContextProvider";
import { AuthorizationContextProvider } from "../contexts/authorization/AuthorizationContextProvider";
import { WelcomePageContainer } from "../welcomePage/WelcomePageContainer";

import "./reset.scss";
import "./main.scss";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthorizationContextProvider>
                    <Layout>
                        <WelcomePageContainer />
                        <RestaurantContainer />
                    </Layout>
                </AuthorizationContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};
