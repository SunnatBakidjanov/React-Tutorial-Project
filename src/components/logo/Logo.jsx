import styles from "./logo.module.scss";
import logoImg from "/img/svg/logoImg.svg";

export const Logo = () => {
    return (
        <div className={styles.container} onClick={() => window.location.reload()}>
            <img className={styles.img} src={logoImg} alt='' />
        </div>
    );
};
