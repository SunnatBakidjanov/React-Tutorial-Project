import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progressBar/ProgressBar";
import { WelcomePage } from "../welcomePage/WelcomePage";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <WelcomePage />

            <main className={styles.content}>
                <div className={styles.wrapper}>{children}</div>
            </main>

            <Footer />
        </>
    );
};
