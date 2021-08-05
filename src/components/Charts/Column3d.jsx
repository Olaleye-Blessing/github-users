// Step 4 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

import { useAppContext } from "../../context/AppContext";
import GeneralChart from "./GeneralChart";

const Column3d = () => {
    let { mostForkedRepo } = useAppContext();

    let chartOptions = {
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
    };

    return (
        <GeneralChart
            chartType="column3d"
            caption="Most Forked"
            theme={FusionTheme}
            themeName="fusion"
            data={mostForkedRepo}
            chartOptions={chartOptions}
        />
    );
};

export default Column3d;
