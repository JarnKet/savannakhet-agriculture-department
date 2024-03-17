import Image from "next/image";

// Components
import Node from "@/components/StructureNode";

// Constants
import { structureData } from "@/constants/structure-data";

export default function Structure() {
  return (
    <section>
      <div className="min-h-[70vh] w-full relative">
        <div class="bg-gradient-to-b from-neutral-900 via-emerald-900 to-green-900 absolute inset-0 z-10 opacity-60" />
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image src={"/structure_banner.png"} alt="duty hero" fill sizes={100} className="object-cover grayscale" />
        </div>
        <div className="absolute z-20 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="w-full text-4xl font-bold lg:text-8xl">ໂຄງຮ່າງການຈັດຕັ້ງ</h1>
          <p className="mt-4 text-xl lg:text-2xl">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ</p>
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto scale-50 md:scale-75">
        <Node {...structureData} />
      </div>

      <ol className="max-w-[50rem] mx-auto p-10 flex flex-col gap-10 text-xl list-decimal">
        <li>ຂະແໜງບໍລິຫານ ແລະ ແຜນການ;</li>
        <li>ຂະແໜງປູກຝັງ;</li>
        <li>ຂະແໜງລ້ຽງສັດ ແລະ ການປະມົງ;</li>
        <li>ຂະແໜງປ່າໄມ້;</li>
        <li>ກອງກວດກາປ່າໄມ້;</li>
        <li>ຂະແໜງຊົນລະປະທານ;</li>
        <li>ຂະແໜງຄຸ້ມຄອງ ແລະ ພັດທະນາທີ່ດິນກະສິກຳ;</li>
        <li>ຂະແໜງພັດທະນາຊົນນະບົດ;</li>
        <li>ສູນບໍລິການເຕັກນິກກະສິກຳ ໜອງເຕົ່າ;</li>
        <li>ກອງຄຸ້ມຄອງປ່າສະຫງວນ ແລະ ປ່າປ້ອງກັນ;</li>
        <li>ກອງຄຸ້ມຄອງປ່າໂຄກໂອງ-ມັ່ງ.</li>
      </ol>
    </section>
  );
}
