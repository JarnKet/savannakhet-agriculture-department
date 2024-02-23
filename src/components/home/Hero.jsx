"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion, transform } from "framer-motion";
export default function Hero() {
  const router = useRouter();

  return (
    <main className="relative flex items-center min-h-screen px-[32px]">
      <Image src={"/hero-bg.jpg"} fill sizes="100%" className="object-cover" />

      <motion.article className="z-10 translate-y-[-50px]">
        <h1 className="text-[150px] font-extrabold text-gray-200 max-w-[800px] leading-[150px]">ການພັດທະນາແບບຍືນຍົງ</h1>
        <Button onClick={() => router.push("/duty")} className="p-8 text-2xl text-gray-200 bg-transparent border">
          ຍຸດທະສາດປີ 2024
        </Button>
      </motion.article>
    </main>
  );
}
