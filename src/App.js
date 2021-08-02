import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
            </Switch>
        </>
    );
};

export default App;
