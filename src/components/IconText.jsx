const IconText = ({ icon, text }) => {
    return (
        <div className="flex gap-2 items-center justify-start">
            <span className="pt-2">{icon}</span>
            <span>{text}</span>
        </div>
    );
};

export default IconText;
