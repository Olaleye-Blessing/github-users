// Step 1 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 2 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 3 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 4 - Include the theme as fusion --- go to each chart
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const GeneralChart = ({
    chartType,
    caption,
    theme,
    themeName,
    data,
    subCaption,
    chartOptions,
}) => {
    if (data.length === 0) return null;
    // Step 5 - Adding the chart and theme as dependency to the core fusioncharts
    ReactFC.fcRoot(FusionCharts, Column2D, theme);

    // Create a JSON object to store the chart configurations
    const chartConfigs = {
        type: chartType, // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: caption, //Set the chart caption
                theme: themeName, //Set the theme for your chart
                ...chartOptions,
            },

            // Chart Data - from step 2
            data,
            // data: chartData,
        },
    };
    if (subCaption) {
        chartConfigs.dataSource.chart.subCaption = subCaption;
    }
    return <ReactFC {...chartConfigs} />;
};

export default GeneralChart;
