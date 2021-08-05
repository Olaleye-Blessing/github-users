const Button = ({ text, onClick, extraClass }) => {
    return (
        <button
            onClick={onClick}
            className={`${extraClass} px-2 pt-1 pb-2 transition-colors duration-200`}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    extraClass: "",
    onClick: null,
};

export default Button;
