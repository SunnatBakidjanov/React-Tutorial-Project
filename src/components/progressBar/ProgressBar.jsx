import { useProgressBar } from "./useProgressBar";
import style from "./progressBar.module.scss";

export const ProgressBar = () => {
    const { progress } = useProgressBar();

    return (
        <div className={style.container}>
            <div className={style.progress} style={{ width: `${progress}%` }}></div>
        </div>
    );
};
