import Image from "next/image";

export default function Structure() {
  return (
    <section>
      <div className="min-h-[70vh] w-full relative">
        <Image src={"/duty-hero.jpg"} alt="duty hero" fill sizes={100} className="object-cover" />
        <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-4xl font-bold lg:text-8xl">ໂຄງຮ່າງການຈັດຕັ້ງ</h1>
          <p className="mt-4 text-xl lg:text-2xl">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ</p>
        </div>
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
