export const getButtonClass = (index, restaurantsLength, styles) => {
    const isEven = restaurantsLength % 2 === 0;
    const isLast = isEven && index === restaurantsLength - 1;

    return `${styles.button} ${isLast ? styles.last : ""}`;
};
