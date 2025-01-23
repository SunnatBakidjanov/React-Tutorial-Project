export const ReviewItem = ({ user, text, rating }) => {
    return (
        <>
            <p className='restaurants__user-name'>{`Name: ${user}`}</p>
            <p className='restaurants__reviews-text'>{`Review: ${text}`}</p>
            <p className='restaurants__reviews-rating'>{`Rating: ${rating}`}</p>
        </>
    );
};
