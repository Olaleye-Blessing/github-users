const FormInputSearch = () => {
    return (
        <div>
            <input
                type="search"
                name="search"
                id="search"
                className="text-center text-purple-primary pb-1 w-full max-w-xs border-purple-dark border-b-2 bg-transparent placeholder-purple-dark caret-white-primary"
                placeholder="Enter user name"
            />
        </div>
    );
};

export default FormInputSearch;
