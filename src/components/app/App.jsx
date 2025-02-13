import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaurants";
import { ThemeContextProvider } from "../contexts/theme/ThemeContextProvider";
import { AuthorizationContextProvider } from "../contexts/authorization/AuthorizationContextProvider";
import { WelcomePage } from "../welcomePage/WelcomePage";

import "./reset.scss";
import "./main.scss";

export const App = () => {
    return (
        <ThemeContextProvider>
            <AuthorizationContextProvider>
                <Layout>
                    <WelcomePage />
                    <Restaurants />
                </Layout>
            </AuthorizationContextProvider>
        </ThemeContextProvider>
    );
};
