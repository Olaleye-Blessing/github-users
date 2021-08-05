// import { useAppContext } from "../../../context/AppContext";
// import FormInputSearch from "../../Form/FormInputSearch";
import { useAppContext } from "../../../context/AppContext";
import FormSearch from "../../Form/FormSearch";
// import FormSubmit from "../../Form/FormSubmit";
// import Form from "../../Form/Index";
import HomeSearchFigure from "../../Home/HomeSearchFigure";
import HomeSearchHeader from "../../Home/HomeSearchHeader";

const SearchQuestion = () => {
    let { errorMsg } = useAppContext();
    return (
        <>
            <HomeSearchFigure />
            <section className="text-center lg:self-stretch lg:flex lg:flex-col lg:items-center lg:justify-center">
                {<div className="text-red-darker mb-4">{errorMsg.msg}</div>}
                <HomeSearchHeader />
                <FormSearch />
            </section>
        </>
    );
};

export default SearchQuestion;
