import { Footer } from "../footer/Footer";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />

            <main>{children}</main>

            <Footer />
        </>
    );
};
