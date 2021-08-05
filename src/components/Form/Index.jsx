const Form = ({ onSubmit, children }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="px-2">
            {children}
        </form>
    );
};

export default Form;
