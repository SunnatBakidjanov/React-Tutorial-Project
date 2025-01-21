import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
    return (
        <div className='page'>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </div>
    );
};
