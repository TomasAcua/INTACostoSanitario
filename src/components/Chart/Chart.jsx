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

const Chart = ({ plans, setChartImage }) => {
    const chartRef = useRef(null)
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    const datasetColors = {
        costo: {
            background: 'rgba(234, 144, 95, 0.59)',
            border: 'rgb(228,109,48)'
        },
        principios: {
            background: 'rgba(108, 172, 140, 0.57)',
            border: 'rgb(20,107,59)'
        }
    };

    useEffect(() => {
        if (plans) {
            const validPlans = plans.filter(plan => plan.productos && plan.productos.length > 0);
            console.log(plans[0].costoTotal)
            const labels = validPlans.map((plan) => plan.name);
            const dataCosto = validPlans.map((plan) => plan.costoTotal);
            const totalPrincipiosActivos = validPlans.map(plan =>
                plan.productos.reduce((acc, producto) => acc + (producto.cantidad || 0), 0)
            );

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "Costo",
                        data: dataCosto,
                        backgroundColor: datasetColors.costo.background,
                        borderColor: datasetColors.costo.border,
                        borderWidth: 1,
                    },
                    {
                        label: "Cantidad de Principios Activos",
                        data: totalPrincipiosActivos,
                        backgroundColor: datasetColors.principios.background,
                        borderColor: datasetColors.principios.border,
                        borderWidth: 1,
                    }
                ]
            });
        }

    }, [plans]);

    // useEffect(() => {
    //     if (chartRef.current) {
    //         const chartInstance = chartRef.current;
    //         const image = chartInstance.toBase64Image();
    //         setChartImage(image);
    //     }
    // });

    const options = {
        responsive: true,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
            onComplete: () => {
                if (chartRef.current) {
                    const image = chartRef.current.toBase64Image();
                    setChartImage(image);
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 },
                    color: '#333'
                }
            },
            title: {
                display: true,
                text: 'Gráfico de Planes',
                font: { size: 18 }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grace: '10%',
                title: {
                    display: true,
                    text: 'Valores',
                    font: { size: 14 }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Planes',
                    font: { size: 14 }
                }
            }
        }
    };

    return <Bar ref={chartRef} data={chartData} options={options} />;
}

export default Chart;
