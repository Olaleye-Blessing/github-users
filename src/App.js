import { Route, Switch } from "react-router";
import AuthWrapper from "./AuthWrapper";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
    return (
        <AuthWrapper>
            <Switch>
                <PrivateRoute path="/" exact>
                    <Navbar />
                    <HomePage />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </AuthWrapper>
    );
};

export default App;
