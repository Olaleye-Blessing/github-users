import Loading from "../components/Indicator/Loading";
import ScreenOverlay from "../components/ScreenOverlay";
import SearchQuestion from "../components/SearchArea/SearchQuestion/Index";
import SearchResult from "../components/SearchArea/SearchResult/Index";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
    let { showSearch, searching } = useAppContext();

    return (
        <main
            className={`px-3 pb-10 sm:px-8 md:px-10 lg:px-32 ${
                showSearch
                    ? "flex flex-col space-y-10 items-center flex-auto lg:flex-row justify-center"
                    : "justify-start"
            }`}
        >
            {showSearch && <SearchQuestion />}
            {searching && <ScreenOverlay children={<Loading />} />}
            {!showSearch && <SearchResult />}
        </main>
    );
};

export default HomePage;
