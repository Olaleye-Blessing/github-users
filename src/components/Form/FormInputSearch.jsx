const FormInputSearch = ({ value, onChange }) => {
    return (
        <div>
            <input
                type="search"
                name="search"
                id="search"
                value={value}
                onChange={onChange}
                className="text-center text-purple-primary pb-1 pt-2 px-2 w-full max-w-xs border-purple-dark border-b-2 bg-transparent placeholder-purple-dark caret-white-primary outline-none hover:bg-purple-primary hover:bg-opacity-5 transition-all duration-200"
                placeholder="Enter user name"
            />
        </div>
    );
};

export default FormInputSearch;
