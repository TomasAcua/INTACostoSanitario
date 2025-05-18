import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    BarElement,
    Tooltip,
    Legend,
    scales
} from "chart.js";
import { callback } from "chart.js/helpers";
import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphic = ({ plans, setChartImage }) => {
    const chartRef = useRef(null)
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (plans) {
            const labels = plans.map((plan) => plan.name)
            const data = plans.map((plan) => plan.costoTotal)
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "Costo",
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1,
                    }
                ]
            })
        } 

    }, [plans])

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current
            const image = chartInstance.toBase64Image()
            setChartImage(image)
        }
    })

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Gráfico de Planes' },
            tooltip: {
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };
    return (<Bar ref={chartRef} data={chartData} options={options} ></Bar>);
}

export default Graphic;
