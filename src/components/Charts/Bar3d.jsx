import { useAppContext } from "../../context/AppContext";

// Step 4 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import GeneralChart from "./GeneralChart";

const Bar3d = () => {
    let { mostForkedRepo } = useAppContext();

    let chartOptions = {
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
    };

    return (
        <GeneralChart
            chartType="bar3d"
            caption="Most Starred Repo"
            theme={FusionTheme}
            themeName="fusion"
            data={mostForkedRepo}
            // subCaption="By The user"
            chartOptions={chartOptions}
        />
    );
};

export default Bar3d;
