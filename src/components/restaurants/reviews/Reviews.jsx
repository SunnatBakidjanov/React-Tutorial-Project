export const Reviews = ({ userName, text, rating }) => {
    return (
        <ul>
            <li>
                <p className='user-name'>{`Name: ${userName}`}</p>
                <p className='reviews-text'>{`Review: ${text}`}</p>
                <p className='reviews-rating'>{`Rating: ${rating}`}</p>
            </li>
        </ul>
    );
};
