import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { getNewsDetail } from "@/services";

export default async function ActivityDetail({ params }) {
	const res = await getNewsDetail(params.slug);

	return (
		<article>
			<div className="w-full h-[500px] relative">
				<Image
					src={res?.featuredImage?.url}
					radius="none"
					alt={"activity banner"}
					className="w-full"
					fill
				/>
			</div>
			<section className="max-w-[50rem] mx-auto px-4 md:px-0 py-8 flex flex-col gap-4">
				<Link href={"/activity"} className="text-green-500 underline">
					ວຽກງານການເຄື່ອນໄຫວ
				</Link>
				<h1 className="text-xl font-bold md:text-4xl">{res.title}</h1>
				{/* <div className="blog-content" dangerouslySetInnerHTML={{ __html: res?.detail?.html }} /> */}
				<div className="blog-content">{parse(res?.detail?.html)}</div>
				<div className="flex items-center gap-4">
					<div className="w-[60px] h-[60px] rounded-full relative">
						<Image
							src={res?.officer?.profileImage?.url}
							alt={res?.officer?.fullName}
							fill
						/>
					</div>
					<div>
						<h3>{res?.officer?.fullName}</h3>
						<small>{res?.officer?.bio}</small>
					</div>
				</div>
			</section>
			{/* Post {params.slug} */}
		</article>
	);
}
