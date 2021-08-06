const Button = ({ text, onClick, extraClass, children, type }) => {
    return (
        <button
            onClick={onClick}
            className={`${extraClass} transition-colors duration-200 inline-block rounded`}
            type={type}
        >
            {text}
            {children}
        </button>
    );
};

Button.defaultProps = {
    extraClass: "",
    onClick: null,
    type: "button",
};

export default Button;
