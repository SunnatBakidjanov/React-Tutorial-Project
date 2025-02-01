import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/restaurants";
import "./reset.scss";
import "./main.scss";

export const App = () => {
    return (
        <Layout>
            <Restaurants />
        </Layout>
    );
};
