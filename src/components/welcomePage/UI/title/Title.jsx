import { use } from "react";
import { ThemeContext } from "../../../contexts/theme/themeContext";

export const Title = ({ text, customStyle }) => {
    const { themeVariables } = use(ThemeContext);

    return (
        <h2 className={`${customStyle || ""}`} style={{ borderBottomColor: themeVariables["--welcome-page-title-border-color"], transition: themeVariables.transition }}>
            {text}
        </h2>
    );
};
