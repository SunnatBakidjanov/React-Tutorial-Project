import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaurants";
import { ThemeContextProvider } from "../contexts/theme/ThemeContextProvider";
import { WelcomePage } from "../welcomePage/WelcomePage";

import "./reset.scss";
import "./main.scss";

export const App = () => {
    return (
        <ThemeContextProvider>
            <Layout>
                <WelcomePage />
                <Restaurants />
            </Layout>
        </ThemeContextProvider>
    );
};
