import { BiSearch } from "react-icons/bi";

const FormSubmit = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <button
                type="submit"
                className="bg-black-dark px-10 flex items-center justify-center gap-3 pt-3 pb-3 rounded-3xl text-sm font-bold"
            >
                <span>SEARCH</span>
                <span className="pt-1">
                    <BiSearch />
                </span>
            </button>
        </div>
    );
};

export default FormSubmit;
