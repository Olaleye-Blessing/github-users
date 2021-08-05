import NavHomeLogo from "./NavHomeLogo";
import NavLogout from "./NavLogout";
import NavRequestSearch from "./NavRequestSearch";
import NavUser from "./NavUser";

const Navbar = () => {
    return (
        <>
            <nav className="bg-black-light px-3 py-4 flex items-center justify-between shadow-lg hover:shadow lg:px-32">
                <NavHomeLogo />
                <NavUser />
                <NavLogout />
            </nav>
            <NavRequestSearch />
        </>
    );
};

export default Navbar;
