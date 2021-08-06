import Button from "./Button";

const ColoredButton = ({ text, onClick, extraClass, children, type }) => {
    return (
        <Button
            text={text}
            type={type}
            onClick={onClick}
            extraClass={`${extraClass} bg-purple-primary hover:bg-opacity-60 focus:ring-2 focus:ring-purple-dark focus:bg-transparent`}
            children={children}
        />
    );
};

ColoredButton.defaultProps = {
    text: "",
    onClick: null,
    extraClass: "",
    children: null,
};

export default ColoredButton;
