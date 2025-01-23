export const ReviewItem = ({ user, text, rating }) => {
    return (
        <>
            <p className='user-name'>{`Name: ${user}`}</p>
            <p className='reviews-text'>{`Review: ${text}`}</p>
            <p className='reviews-rating'>{`Rating: ${rating}`}</p>
        </>
    );
};
