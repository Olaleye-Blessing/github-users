import { BsPersonFill } from "react-icons/bs";
const Avatar = ({ src, alt }) => {
    return (
        <figure
            className={`w-12 h-12 ${
                src ? "" : "rounded-full bg-green-dark text-white-primary"
            }`}
        >
            {src ? (
                <img src={src} alt={alt} className="rounded-full" />
            ) : (
                <BsPersonFill />
            )}
        </figure>
    );
};

export default Avatar;
