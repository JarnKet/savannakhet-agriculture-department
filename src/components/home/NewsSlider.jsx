"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function NewsSlider({ data }) {
	const router = useRouter();
	// const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;
	const [isSmallDevice, setIsSmallDevice] = useState(false);

	useEffect(() => {
		setIsSmallDevice(window.matchMedia("(max-width: 768px)").matches);
	}, []);

	return (
		<Swiper
			className="w-full h-[500px] mx-auto "
			modules={[Pagination, Autoplay, Navigation]}
			centeredSlides={true}
			grabCursor={true}
			slidesPerView={isSmallDevice ? 1 : 3}
			// slidesPerView={3}
			spaceBetween={50}
			pagination={{
				type: "fraction",
			}}
			navigation={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			loop={true}
			//   onSlideChange={() => console.log("slide change")}
			//   onSwiper={(swiper) => console.log(swiper)}
		>
			{data?.map((item) => (
				<SwiperSlide
					className="overflow-hidden bg-gray-50 border rounded-lg  max-h-[450px] p-4 md:p-0"
					key={item.id}
					onClick={() => {
						router.push(`/activity/${item.slug}`);
					}}
				>
					<div className="h-[300px] w-full relative">
						<Image
							src={item.featuredImage?.url}
							alt={"featuredImage"}
							fill
							sizes="100%"
							quality={100}
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="w-full p-4">
						<h3 className="font-semibold text-black">{item?.title}</h3>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
