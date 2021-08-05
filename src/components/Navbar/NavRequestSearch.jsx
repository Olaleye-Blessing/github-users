import { useAppContext } from "../../context/AppContext";
// import FormSearch from "../Form/FormSearch";

const NavRequestSearch = () => {
    let { setShowSearch, showSearch, userRateLimit } = useAppContext();
    return (
        <div className="flex items-center justify-center gap-8 mt-3 lg:mt-6">
            <div className="flex gap-3 items-center justify-center text-md">
                <span className="text-lg">Requests:</span>
                <div className="flex items-center justify-center gap-0">
                    <small
                        className={`pr-1 font-bold self-start text-base lg:text-lg  ${
                            userRateLimit > 15
                                ? " text-green-dark"
                                : " text-red-darker"
                        }`}
                    >
                        {userRateLimit}
                    </small>
                    {/*
                     */}
                    <small className="text-2xl lg:text-5xl font-light">/</small>
                    <small className="text-base lg:text-lg pl-1 self-end">
                        60
                    </small>
                </div>
            </div>
            {!showSearch && (
                <div className="text-center">
                    <button
                        className="text-blue-primary"
                        onClick={() => setShowSearch(true)}
                    >
                        Search
                    </button>
                </div>
            )}
            {/* <FormSearch extraClass="bg-red-darker flex" /> */}
        </div>
    );
};

export default NavRequestSearch;
