import Image from "next/image";
import Link from "next/link";

// Icons
import { IconPlant, IconChartArea, IconLicense } from "@tabler/icons-react";

// Components
import { Hero, NewsSlider } from "@/components/home";
import { Button } from "@nextui-org/react";

// Functions
import { get5News } from "@/services";

export default async function Home() {
	const news = await get5News();

	return (
		<>
			<Hero />
			<section className="hidden w-full grid-cols-3 shadow md:grid">
				<Link
					href={"/activity"}
					className="flex-col h-20 gap-2 transition-all ease-in-out ext-xl flexCenter g hover:font-bold hover:underline duration-400 hover:text-green-600"
				>
					<IconPlant size={40} />
					ວຽກງານການເຄື່ອນໄຫວ
				</Link>
				<Link
					href={"/statistic"}
					className="flex-col h-20 gap-2 transition-all ease-in-out ext-xl flexCenter g hover:font-bold hover:underline duration-400 hover:text-green-600"
				>
					<IconChartArea size={40} />
					ສະຖິຕິ
				</Link>
				<Link
					target="_blank"
					href={
						"https://www.maf.gov.la/%e0%ba%99%e0%ba%b4%e0%ba%95%e0%ba%b4%e0%ba%81%e0%ba%b3/"
					}
					className="flex-col h-20 gap-2 transition-all ease-in-out ext-xl flexCenter g hover:font-bold hover:underline duration-400 hover:text-green-600"
				>
					<IconLicense size={40} />
					ເອກະສານເຜີຍແຜ່
				</Link>
			</section>
			<div className="max-w-[80rem] mx-auto flex flex-col items-center gap-8 py-10">
				<div className="flex items-center justify-between w-full">
					<h2 className="w-full text-2xl font-bold text-center md:text-4xl md:text-left">
						ວຽກງານການເຄື່ອນໄຫວລ່າສຸດ
					</h2>
					<Link href={"/activity"} className="hidden md:block">
						<Button color="success">ທັງໝົດ</Button>
					</Link>
				</div>
				<NewsSlider data={news} />
			</div>
			{/* <Statistic /> */}
		</>
	);
}

export const revalidate = 86400; // revalidate at most every day
