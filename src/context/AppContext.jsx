import { createContext, useContext, useEffect, useRef, useState } from "react";
// import mockFollowers from "../mockdata/mockFollowers";
import { fetchMultipleData } from "../utilities/fetchMultipleItems";
import { getLanguages } from "../utilities/languages";
import { sortAndSliceObject } from "../utilities/sortAndSliceObject";
// import mockRepo from "./../mockdata/mockRepo";
// import mockUser from "./../mockdata/mockUser";

const AppContext = createContext();

let baseUrl = "https://api.github.com/users";

export const AppProvider = ({ children }) => {
    const formRef = useRef(null);
    const [inputSearch, setInputSearch] = useState("");

    const [searching, setSearching] = useState(false);
    const [showSearch, setShowSearch] = useState(true);

    const [userRateLimit, setUserRateLimit] = useState(0);

    // const [userDetail, setUserDetail] = useState(mockUser);
    const [userDetail, setUserDetail] = useState([]);
    // const [userFollowers, setUserFollowers] = useState(mockFollowers);
    const [userFollowers, setUserFollowers] = useState([]);
    // const [userFollowing, setUserFollowing] = useState(mockFollowers);
    const [userFollowing, setUserFollowing] = useState([]);
    // const [userRepos, setUserRepos] = useState(mockRepo);
    const [userRepos, setUserRepos] = useState([]);

    const [errorMsg, setErrorMsg] = useState({ show: false, msg: "" });

    const handleErrorMsg = (show = false, msg = "") => {
        setErrorMsg({ show, msg });
    };

    const checkRateLimit = async () => {
        try {
            let req = await fetch(`https://api.github.com/rate_limit`);
            let res = await req.json();
            if (!req.ok) throw res;
            let {
                rate: { remaining },
            } = res;
            setUserRateLimit(remaining);
        } catch (error) {
            // console.log(error);
        }
    };

    const handleSubmitSearch = async () => {
        handleErrorMsg();

        if (inputSearch.trim() === "") {
            handleErrorMsg(true, "Please Enter a user name");
            return;
        }

        setSearching(true);

        try {
            let req = await fetch(`${baseUrl}/${inputSearch}`);
            let userDetail = await req.json();
            if (!req.ok) throw userDetail;

            // get other info if it is successful

            let {
                responses: [followers, following, repos],
            } = await fetchMultipleData([
                `${baseUrl}/${inputSearch}/followers`,
                `${baseUrl}/${inputSearch}/following`,
                `${baseUrl}/${inputSearch}/repos?per_page=100`,
            ]);
            followers = followers.value;
            following = following.value;
            repos = repos.value;

            await checkRateLimit();
            setUserDetail(userDetail);
            setUserRepos(repos);
            setUserFollowers(followers);
            setUserFollowing(following);
            setShowSearch(false);
            setInputSearch("");
        } catch (error) {
            if (error.message === "Not Found") {
                handleErrorMsg(
                    true,
                    "User With That User name could not be found!!"
                );
            }
        } finally {
            setSearching(false);
        }
    };

    const handleSearchChange = (value) => {
        handleErrorMsg();
        setInputSearch(value);
    };

    useEffect(() => {
        checkRateLimit();
    }, []);

    useEffect(() => {
        // dont enable auto search if:
        // 1. rate limit is exhausted
        // 2. input search is empty. This happens when the nav search button is clicked
        if (userRateLimit === 0 || !inputSearch) {
            return;
        }

        handleSubmitSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showSearch]);

    let languages = getLanguages(userRepos);

    // most used Languages
    let mostUsedLanguages = Object.values(languages).sort(
        (a, b) => b.value - a.value
    );

    let otherLanguages = mostUsedLanguages.slice(3).reduce(
        (acc, current) => {
            return { label: "others", value: acc.value + current.value };
        },
        { label: "others", value: 0 }
    );

    mostUsedLanguages.splice(3);

    if (otherLanguages.value > 0) mostUsedLanguages.push(otherLanguages);

    let mostStarredLanguages = sortAndSliceObject(languages, "stars", 0, 3).map(
        (item) => ({ ...item, value: item.stars })
    );

    let { mostStarredRepo, mostForkedRepo } = userRepos.reduce(
        (accu, current) => {
            const { stargazers_count, name, forks } = current;
            accu.mostStarredRepo[name] = {
                label: name,
                value: stargazers_count,
            };
            accu.mostForkedRepo[name] = {
                label: name,
                value: forks,
            };
            return accu;
        },
        { mostStarredRepo: {}, mostForkedRepo: {} }
    );

    mostStarredRepo = sortAndSliceObject(mostStarredRepo, "value", 0, 4);

    mostForkedRepo = sortAndSliceObject(mostForkedRepo, "value", 0, 4);

    return (
        <AppContext.Provider
            value={{
                searching,
                inputSearch,
                handleSubmitSearch,
                handleSearchChange,
                showSearch,
                setShowSearch,
                userDetail,
                userFollowers,
                userFollowing,
                userRepos,
                languages,
                mostUsedLanguages,
                mostStarredLanguages,
                mostStarredRepo,
                mostForkedRepo,
                userRateLimit,
                errorMsg,
                handleErrorMsg,
                formRef,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
