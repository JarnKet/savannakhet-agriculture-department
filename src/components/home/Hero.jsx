// "use client";
// import { useRouter } from "next/navigation";
import Image from "next/image";

// Components
import Logo from "@/icons/Logo";

// Third Party
// import { Button } from "@nextui-org/react";
// import { motion, transform } from "framer-motion";
export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-[32px] gap-4">
      <div className="relative md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
        {/* <Logo width={isMobile ? 50 : 150} height={isMobile ? 50 : 150} /> */}
        <Image src="/logo.png" fill sizes="100%" alt="logo" />
      </div>
      <h1 className="text-2xl font-bold text-center text-white md:text-6xl">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ</h1>
      <div className="w-full text-lg text-center text-white">
        <p>ຮັບປະກັນຄວາມໝັ້ນຄົງ ທາງດ້ານສະບຽງອາຫານ, ຜະລິດສິນຄ້າກະສິກໍາທີ່ມີທ່າແຮງ, ພັດທະນາກະສິກໍາສະອາດ, ປອດໄພ ແລະ ຍືນຍົງ</p>
        <p>ບົນພື້ນຖານການຫັນ ເປັນອຸດສາຫະກໍາ ແລະ ທັນສະໄໝ ຕິດພັນກັບການພັດທະນາຊົນນະບົດ ເພື່ອປະກອບສ່ວນ ສ້າງພື້ນຖານ ເສດຖະກິດແຫ່ງຊາດ</p>
      </div>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image src={"/hero_office_bg.png"} fill sizes="100%" className="object-cover grayscale" alt="hero banner" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-emerald-900 to-green-900 -z-10 opacity-80" />

      {/* <motion.article className="z-10 translate-y-[-50px]">
        <h1 className="text-[150px] font-extrabold text-gray-200 max-w-[800px] leading-[150px]">ການພັດທະນາແບບຍືນຍົງ</h1>
        <Button onClick={() => router.push("/duty")} className="p-8 text-2xl text-gray-200 bg-transparent border">
          ຍຸດທະສາດປີ 2024
        </Button>
      </motion.article> */}
    </main>
  );
}
