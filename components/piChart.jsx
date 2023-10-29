import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8E5EA2",
                    "#3cba9f",
                    "#e8c3b9",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8E5EA2",
                    "#3cba9f",
                    "#e8c3b9",
                ],
            },
        ],
    };

    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;