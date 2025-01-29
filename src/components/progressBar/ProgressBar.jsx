import { useProgressBar } from "./useProgressBar";
import style from "./progressBar.module.scss";

export const ProgressBar = () => {
    const { progressBar } = useProgressBar();

    return (
        <div className={style.container}>
            <div className={style.progress} ref={progressBar}></div>
        </div>
    );
};
