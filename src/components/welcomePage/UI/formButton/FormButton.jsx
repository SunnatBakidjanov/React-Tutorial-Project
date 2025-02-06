import style from "./formButtom.module.scss";

export const FormButton = () => {
    return (
        <button type='button' className={style.button}>
            Показать рестораны
        </button>
    );
};
