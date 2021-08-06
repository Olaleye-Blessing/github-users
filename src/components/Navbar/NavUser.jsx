import { useAuth0 } from "@auth0/auth0-react";

const NavUser = () => {
    const { user } = useAuth0();

    return (
        <div className="text-center px-3">
            <div>
                Welcome,{" "}
                <span className="font-bold text-purple-primary lg:text-2xl">
                    {user.name}
                </span>
            </div>
        </div>
    );
};

export default NavUser;
