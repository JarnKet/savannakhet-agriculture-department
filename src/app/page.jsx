import Image from "next/image";
import { Button } from "@nextui-org/react";

import { Hero, Statistic, NewsSlider } from "@/components/home";
import { get5News } from "@/services";

export default async function Home() {
	const news = await get5News();

	return (
		<>
			<Hero />
			<div className="max-w-[80rem] mx-auto flex flex-col items-center gap-8 py-10">
				<h2 className="w-full text-4xl font-bold text-left">
					ວຽກງານການເຄື່ອນໄຫວລ່າສຸດ
				</h2>
				<NewsSlider data={news} />
			</div>
			{/* <Statistic /> */}
		</>
	);
}

export const revalidate = 86400; // revalidate at most every day
