import { useAuth0 } from "@auth0/auth0-react";
import ColoredButton from "../Buttons/ColoredButton";

const NavLogout = () => {
    let { logout } = useAuth0();
    return (
        <div className="ml-auto">
            <ColoredButton
                extraClass="px-3 pt-1 pb-2 sm:px-6 md:px-10"
                onClick={() => {
                    logout({ returnTo: window.location.origin });
                }}
                text="logout"
            />
        </div>
    );
};

export default NavLogout;
