import { Logo } from "./UI/logo/Logo";
import { ToggleThemeButton } from "./UI/toggleThemeButton/ToggleThemeButton";

import styles from "./header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                <ToggleThemeButton />
            </div>
        </header>
    );
};
