const NameAndUserName = ({ name, username, extraClass }) => {
    return (
        <h4 className={`flex flex-col ${extraClass}`}>
            <span className="text-lg">{name}</span>
            <small className="text-xs -mt-1 text-white-primary text-opacity-40">
                @{username || "unknown"}
            </small>
        </h4>
    );
};

NameAndUserName.defaultProps = {
    extraClass: "",
};

export default NameAndUserName;
