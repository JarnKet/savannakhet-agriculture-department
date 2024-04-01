import Image from "next/image";
import OutputStatistic from "@/components/statistic/OutputStatistic";
import StaffStatistic from "@/components/statistic/StaffStatistic";

export default function Statistic() {
	return (
		<section>
			<div className="min-h-[70vh] w-full relative">
				<Image
					src={"/rice-field.jpg"}
					alt="activity hero"
					fill
					sizes={100}
					className="object-cover"
				/>
				<div className="absolute w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<h1 className="text-4xl font-bold lg:text-8xl">ສະຖິຕິ</h1>
					<p className="text-xl lg:text-2xl">
						ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ
					</p>
				</div>
			</div>
			<OutputStatistic />
			<StaffStatistic />
		</section>
	);
}
