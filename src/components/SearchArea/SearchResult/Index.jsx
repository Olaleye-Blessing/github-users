import Pie3d from "../../Charts/Pie3d";
import ResultHeader from "./ResultHeader";
import ResultMain from "./ResultMain";
import Doughnut from "../../Charts/Doughnut";
import Bar3d from "../../Charts/Bar3d";
import Column3d from "../../Charts/Column3d";
import { useAppContext } from "../../../context/AppContext";

const SearchResult = () => {
    let {
        mostUsedLanguages,
        mostStarredLanguages,
        mostStarredRepo,
        mostForkedRepo,
    } = useAppContext();
    return (
        <>
            <section className="justify-self-start pt-7 w-full">
                <ResultHeader />
                <ResultMain />
            </section>
            {mostUsedLanguages.length !== 0 &&
                mostStarredLanguages.length !== 0 &&
                mostStarredRepo.length !== 0 &&
                mostForkedRepo.length !== 0 && (
                    <section
                        data-sec="chart"
                        className="w-full sm:px-3 md:px-6 lg:px-20 mt-10"
                    >
                        <header className="mb-10">
                            <h3 className="text-2xl">Charts</h3>
                        </header>
                        <section className="md:chartGrid">
                            <div className="mb-5 w-full max-w-md mx-auto">
                                <Pie3d />
                            </div>
                            <div className="mb-5 w-full max-w-2xl mx-auto">
                                <Column3d />
                            </div>
                            <div className="mb-5 w-full max-w-md mx-auto">
                                <Doughnut />
                            </div>
                            <div className="mb-5 w-full max-w-2xl mx-auto">
                                <Bar3d />
                            </div>
                        </section>
                    </section>
                )}
        </>
    );
};

export default SearchResult;
