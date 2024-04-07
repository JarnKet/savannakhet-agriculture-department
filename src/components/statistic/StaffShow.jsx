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
		years: "2021",
		ທັງໝົດ: 830,
		ຍິງ: 243,
		ຊາຍ: 511,
	},
	{
		years: "2022",
		ທັງໝົດ: 800,
		ຍິງ: 253,
		ຊາຍ: 511,
	},
	{
		years: "2023",
		ທັງໝົດ: 792,
		ຍິງ: 256,
		ຊາຍ: 536,
	},
	// Add more years as necessary
];

export default function StaffShow() {
	const [isSmallDevice, setIsSmallDevice] = useState(false);

	useEffect(() => {
		setIsSmallDevice(window.matchMedia("(max-width: 768px)").matches);
	}, []);

	return (
		<BarChart
			width={isSmallDevice ? 300 : 600}
			height={isSmallDevice ? 200 : 300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="years" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="ຍິງ" fill="#8884d8" />
			<Bar dataKey="ຊາຍ" fill="#82ca9d" />
			<Bar dataKey="ທັງໝົດ" fill="#FF0000" />
		</BarChart>
	);
}
