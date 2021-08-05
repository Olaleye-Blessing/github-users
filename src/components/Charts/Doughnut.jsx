import { useAppContext } from "../../context/AppContext";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import GeneralChart from "./GeneralChart";

const Doughnut = () => {
    let { mostStarredLanguages } = useAppContext();

    let chartOptions = {
        decimals: 0,
        doughnutRadius: "40%",
        showPercentValues: 0,
    };

    return (
        <GeneralChart
            chartType="doughnut3d"
            caption="Most Starred Languages"
            theme={FusionTheme}
            themeName="candy"
            data={mostStarredLanguages}
            chartOptions={chartOptions}
        />
    );
};

export default Doughnut;
