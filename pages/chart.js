import { Pie } from "react-chartjs-2";

import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle,
} from "chart.js";

Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle
);

function getRandomColor() {
	var letters = "0123456789ABCDEF".split("");
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

export default function PieChart() {
	var colors = [];
	for (var i = 0; i < 4; i++) {
		colors.push(getRandomColor());
	}

	const data = {
		labels: ["Haffee", "Harsha", "Abhi", "Unknown"],
		datasets: [
			{
				label: "Proof of Stake",
				data: [400, 300, 200, 100],
				// backgroundColor: [
				// 	"rgb(255, 99, 132)",
				// 	"rgb(54, 162, 235)",
				// 	"rgb(255, 205, 86)",
				// 	getRandomColor,
				// ],
				backgroundColor: colors,
				hoverOffset: 4,
			},
		],
	};

	return (
		<div>
			<Pie data={data} height={200} width={300} />
		</div>
	);
}
