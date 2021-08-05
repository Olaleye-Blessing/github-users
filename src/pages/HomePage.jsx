// import { useState } from "react";
// import ScreenOverlay from "../components/Overlay/ScreenOverlay";
import Loading from "../components/Indicator/Loading";
// import mockUser from "./../mockdata/mockUser";
import ScreenOverlay from "../components/Overlay/ScreenOverlay";
import SearchQuestion from "../components/SearchArea/SearchQuestion/Index";
import SearchResult from "../components/SearchArea/SearchResult/Index";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
    let { showSearch, searching } = useAppContext();
    // console.log("showSearch", showSearch);
    // console.log("searching", searching);
    return (
        // <main
        //     className={`px-3 pb-10 flex flex-col gap-10 items-center flex-auto lg:flex-row lg:px-32 ${
        //         showSearch ? "justify-center" : "justify-start"
        //     }`}
        // >
        <main
            className={`px-3 pb-10 ${
                showSearch
                    ? "flex flex-col gap-10 items-center flex-auto lg:flex-row lg:px-32 justify-center"
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
