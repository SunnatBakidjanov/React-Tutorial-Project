import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </>
    );
};
