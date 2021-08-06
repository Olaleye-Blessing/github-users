import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Indicator/Loading";
import ScreenOverlay from "./components/ScreenOverlay";

const AuthWrapper = ({ children }) => {
    let { isLoading, error } = useAuth0();

    if (isLoading) {
        return <ScreenOverlay children={<Loading />} />;
    }

    if (error) {
        return <h1>{error.message}</h1>;
    }

    return <>{children}</>;
};

export default AuthWrapper;
