import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, labels }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Reference to the chart instance

    useEffect(() => {
        // If there's an existing chart, destroy it before creating a new one
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef.current) {
            chartInstance.current = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Number of Users',
                            data: data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }, [data, labels]);

    return (
        <div className="max-w-screen-lg mx-auto">
            <canvas ref={chartRef} />
        </div>
    );
};

export default BarChart;
