import GeneralChart from "./GeneralChart";

// Step 4 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useAppContext } from "../../context/AppContext";

const Pie3d = () => {
    let { mostUsedLanguages } = useAppContext();

    let chartOptions = {
        pieRadius: "40%",
        decimals: 0,
    };

    return (
        <GeneralChart
            chartType="pie3d"
            caption="Most Used Languages"
            theme={FusionTheme}
            themeName="fusion"
            data={mostUsedLanguages}
            subCaption="By The user"
            chartOptions={chartOptions}
        />
    );
};

export default Pie3d;
