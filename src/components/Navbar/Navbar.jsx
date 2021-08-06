import { useAuth0 } from "@auth0/auth0-react";

import NavHomeLogo from "./NavHomeLogo";
import NavLogout from "./NavLogout";
import NavRequestSearch from "./NavRequestSearch";
import NavUser from "./NavUser";

const Navbar = () => {
    const { isAuthenticated, user, isLoading } = useAuth0();
    console.log({ isAuthenticated, user, isLoading });
    return (
        <>
            {/* <nav>
                <button onClick={loginWithRedirect}>login</button>
                <button
                    onClick={() => {
                        logout({ returnTo: window.location.origin });
                    }}
                >
                    logout
                </button>
            </nav> */}
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
