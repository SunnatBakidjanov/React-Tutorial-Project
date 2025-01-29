import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/progressBar";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <Header />
            <main className='content'>
                <div className='container'>{children}</div>
            </main>
            <Footer />
        </>
    );
};
