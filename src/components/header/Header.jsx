import { Logo } from "../logo/logo";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
            </div>
        </header>
    );
};
