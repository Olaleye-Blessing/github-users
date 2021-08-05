const ResultBox = ({ title, children, extraClass }) => {
    return (
        <section className={`my-10 w-full max-w-xs mx-auto ${extraClass} `}>
            <h3 className="bg-black-light text-xl pt-1 pb-2 px-3 w-max">
                {title}
            </h3>
            <div className="bg-black-light pt-4 pb-7 px-3 h-full">
                {children}
            </div>
        </section>
    );
};

ResultBox.defaultProps = {
    extraClass: "",
};

export default ResultBox;
