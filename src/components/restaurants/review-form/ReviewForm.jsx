import { use } from "react";

import { Counter } from "../counter/Counter";
import { useForm } from "./useForm";

import { AuthContext } from "../../contexts/authorization";

export const ReviewForm = () => {
    const { auth } = use(AuthContext);

    const { form, setAddress, setMessage, setIncrement, setDecrement, clearForm } = useForm();

    const { address, message, rating } = form;

    return auth.isAuthed ? (
        <>
            <h3>Форма</h3>

            <form className='form' onSubmit={e => e.preventDefault()}>
                <div className='form-group'>
                    <label htmlFor='adress'>Введите ваш адресс</label>
                    <input type='text' value={address} name='adress' id='adress' onChange={event => setAddress(event.target.value)} />
                    <p>Адресс: {form.address}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>Введите сообщение</label>
                    <textarea name='message' id='message' value={message} onChange={event => setMessage(event.target.value)}></textarea>
                    <p>Сообщение: {form.message}</p>
                </div>

                <Counter count={rating} onIncrement={setIncrement} onDecrement={setDecrement} />

                <button type='button' onClick={clearForm} style={{ display: "block" }}>
                    clear
                </button>
            </form>
        </>
    ) : null;
};
