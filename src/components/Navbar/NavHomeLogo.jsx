import { AiOutlineFileSearch } from "react-icons/ai";
const NavHomeLogo = () => {
    // left-1/2
    return (
        <div className="relative mr-auto">
            <span className="text-lg">WAUSER</span>
            <span className="absolute -top-2 left-6 transform -translate-x-2/4 text-purple-primary text-xl">
                <AiOutlineFileSearch />{" "}
            </span>
        </div>
    );
};

export default NavHomeLogo;
