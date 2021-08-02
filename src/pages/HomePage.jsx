import FormInputSearch from "../components/Form/FormInputSearch";
import FormSubmit from "../components/Form/FormSubmit";
import HomeSearchFigure from "../components/Home/HomeSearchFigure";
import HomeSearchHeader from "../components/Home/HomeSearchHeader";
// import searchImage from "./../images/office.svg";

const HomePage = () => {
    return (
        <main className="px-3 pb-10 flex flex-col gap-10 items-center justify-center flex-auto lg:flex-row lg:px-32">
            <HomeSearchFigure />
            <section className="text-center lg:self-stretch lg:flex lg:flex-col lg:items-center lg:justify-center">
                <HomeSearchHeader />
                <form className="px-2">
                    <FormInputSearch />
                    <FormSubmit />
                </form>
            </section>
        </main>
    );
};

export default HomePage;
