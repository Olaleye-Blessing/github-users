import { useAuth0 } from "@auth0/auth0-react";

const NavLogout = () => {
    let { logout } = useAuth0();
    return (
        <div className="ml-auto">
            <button
                className="border px-2 pt-1 pb-2 rounded-md border-purple-dark"
                onClick={() => {
                    logout({ returnTo: window.location.origin });
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default NavLogout;
