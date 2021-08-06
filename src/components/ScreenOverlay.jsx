const ScreenOverlay = ({ children, extraClass }) => {
    return (
        <div
            className={`fixed inset-0 bg-white-primary bg-opacity-10 flex items-center justify-center h-screen pt-10 pb-12 ${extraClass}`}
        >
            {children}
        </div>
    );
};

ScreenOverlay.defaultProps = {
    extraClass: "",
};

export default ScreenOverlay;
