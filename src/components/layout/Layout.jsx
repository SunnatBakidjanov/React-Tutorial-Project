import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/progressBar";
import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.page}>
                <ProgressBar />
                <Header />
                <main className={styles.content}>
                    <div className={styles.container}>{children}</div>
                </main>
                <Footer />
            </div>
        </>
    );
};
