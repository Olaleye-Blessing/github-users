import { useAppContext } from "../../context/AppContext";
import Button from "../Buttons/Button";

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
            {!showSearch && userRateLimit > 0 && (
                <div className="text-center">
                    <Button
                        text="Search page"
                        extraClass="text-blue-primary hover:text-opacity-70 focus:underline"
                        onClick={() => setShowSearch(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default NavRequestSearch;
