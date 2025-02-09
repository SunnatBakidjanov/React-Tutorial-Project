import styles from "./logo.module.scss";
import logoImg from "/img/svg/logoImg.svg";

export const Logo = () => {
    return (
        <div className={styles.container} onClick={() => window.location.reload()}>
            <h1 className={styles.title}>ANYFOOD</h1>
            <img className={styles.img} src={logoImg} alt='' />
        </div>
    );
};
