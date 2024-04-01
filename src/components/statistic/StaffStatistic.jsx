import Image from "next/image";

// Component
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import StaffShow from "./StaffShow";

export default function StaffStatistic() {
	return (
		<main className="relative flexCenter min-h-screen px-[32px]">
			<Image
				src={"/corn-field-bg.jpg"}
				fill
				sizes="100%"
				className="object-cover"
				alt="Banner"
			/>

			<div className="z-10 translate-y-[-50px]">
				<Card>
					<CardHeader>
						<h2 className="w-full text-xl font-bold text-center">
							ສະຖິຕິພະນັກງານ
						</h2>
					</CardHeader>
					<CardBody>
						<StaffShow />
					</CardBody>
				</Card>
			</div>
		</main>
	);
}
