import { useReducer } from "react";

const INTITAL_VALUE = {
    name: "",
    text: "",
    message: "",
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_NAME":
            return {
                ...INTITAL_VALUE,
                name: payload,
            };
        case "SET_ADDRESS":
            return {
                ...state,
                address: payload,
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: payload,
            };

        default:
            return state;
    }
};

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, INTITAL_VALUE);

    const setName = value => dispatch({ type: "SET_NAME", payload: value });
    const setAdress = value => dispatch({ type: "SET_ADRESS", payload: value });
    const setMessage = value => dispatch({ type: "SET_MESSAGE", payload: value });

    const { name, message, address } = form;

    return (
        <>
            <form className='form' action='#'>
                <div className='form-group'>
                    <input type='text' value={name} name='name' id='name' onChange={event => setName(event.target.value)} />
                    <label htmlFor='name'>Введите ваше имя</label>
                </div>

                <div className='form-group'>
                    <input type='text' value={address} name='adress' id='adress' onChange={event => setAdress(event.target.value)} />
                    <label htmlFor='adress'>Введите ваш адресс</label>
                </div>

                <div className='form-group'>
                    <input type='text' value={message} name='message' id='message' onChange={event => setMessage(event.target.value)} />
                    <label htmlFor='message'>Введите сообщение</label>
                </div>
            </form>
        </>
    );
};
