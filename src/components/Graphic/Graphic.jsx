import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";
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

            const validPlans = plans.filter(plan => plan.productos && plan.productos.length > 0);

            const labels = validPlans.map((plan) => plan.name);
            const dataCosto = validPlans.map((plan) => plan.costoTotal);
            const totalPrincipiosActivos = validPlans.map(plan =>
                plan.productos.reduce((acc, producto) => acc + (producto.cantidad || 0), 0)
            );

            console.log(totalPrincipiosActivos)

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "Costo",
                        data: dataCosto,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: "Cantidad de Principios Activos",
                        data: totalPrincipiosActivos,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
                    }
                ]
            });
        }

    }, [plans]);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current;
            const image = chartInstance.toBase64Image();
            setChartImage(image);
        }
    });

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Gráfico de Planes' },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return <Bar ref={chartRef} data={chartData} options={options} />;
}

export default Graphic;
