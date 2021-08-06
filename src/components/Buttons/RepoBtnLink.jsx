const RepoBtnLink = ({ text, href }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={href}
            className="block text-purple-primary pt-1 pb-2 px-2 mb-2 border border-current hover:border-current rounded-md hover:bg-purple-primary hover:bg-opacity-30"
        >
            {text}
        </a>
    );
};

export default RepoBtnLink;
