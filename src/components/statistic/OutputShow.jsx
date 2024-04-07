"use client";

import { useState, useEffect } from "react";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		name: "ປີ2021",
		ການຜະລິດເຂົ້າ: 884158,
		ການປູກພືດ: 61143,
		"ການຜະລິດຊີ້ນ,ປາ,ໄຂ່": 95250,
		"ງົວ, ຄວາຍ, ໝູ, ແບ້": 4566928,
		"ສັດປີກ(ເປັດ,ໄກ່)": 4852641,
		ການຟື້ນຟູປ່າໄມ້: 39000,
	},
	{
		name: "ປີ2022",
		ການຜະລິດເຂົ້າ: 854309,
		ການປູກພືດ: 75989,
		"ການຜະລິດຊີ້ນ,ປາ,ໄຂ່": 97864,
		"ງົວ, ຄວາຍ, ໝູ, ແບ້": 1289643,
		"ສັດປີກ(ເປັດ,ໄກ່)": 5131790,
		ການຟື້ນຟູປ່າໄມ້: 355,
	},
	{
		name: "ປີ2023",
		ການຜະລິດເຂົ້າ: 842337,
		ການປູກພືດ: 92980,
		"ການຜະລິດຊີ້ນ,ປາ,ໄຂ່": 98870,
		"ງົວ, ຄວາຍ, ໝູ, ແບ້": 1185928,
		"ສັດປີກ(ເປັດ,ໄກ່)": 5461000,
		ການຟື້ນຟູປ່າໄມ້: 132,
	},
	// Add more years as necessary
];

export default function OutputShow() {
	const [isSmallDevice, setIsSmallDevice] = useState(false);

	useEffect(() => {
		setIsSmallDevice(window.matchMedia("(max-width: 768px)").matches);
	}, []);

	return (
		<BarChart
			width={isSmallDevice ? 300 : 600}
			height={isSmallDevice ? 300 : 300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="ການຜະລິດເຂົ້າ" fill="#8884d8" />
			<Bar dataKey="ການປູກພືດ" fill="#82ca9d" />
			<Bar dataKey="ການຜະລິດຊີ້ນ,ປາ,ໄຂ່" fill="#ffc658" />
			<Bar dataKey="ງົວ, ຄວາຍ, ໝູ, ແບ້" fill="#ff7300" />
			<Bar dataKey="ສັດປີກ(ເປັດ,ໄກ່)" fill="#1329" />
			<Bar dataKey="ການຟື້ນຟູປ່າໄມ້" fill="#329" />
			{/* Add more bars for additional data */}
		</BarChart>
	);
}
