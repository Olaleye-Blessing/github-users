import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...otherProps }) => {
    const { isAuthenticated, user } = useAuth0();
    const isUserAuthenticated = isAuthenticated && user;
    // const isUserAuthenticated = false;
    return (
        <Route
            {...otherProps}
            render={() => {
                return isUserAuthenticated ? (
                    children
                ) : (
                    <Redirect to="/login" />
                );
            }}
        ></Route>
    );
};

export default PrivateRoute;
