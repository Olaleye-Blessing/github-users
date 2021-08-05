import { useAppContext } from "../../context/AppContext";
import FormInputSearch from "./FormInputSearch";
import FormSubmit from "./FormSubmit";
// import Form from "./Index";

const FormSearch = ({ extraClass }) => {
    let { handleSubmitSearch, handleSearchChange, inputSearch, formRef } =
        useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitSearch();
    };

    // console.log(formRef);
    return (
        <form
            onSubmit={handleSubmit}
            className={`px-2 ${extraClass}`}
            ref={formRef}
        >
            <FormInputSearch
                value={inputSearch}
                onChange={handleSearchChange}
            />
            <FormSubmit />
        </form>
    );
};

FormSearch.defaultProps = {
    extraClass: "",
};

export default FormSearch;
