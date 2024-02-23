"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export default function Statistic() {
  return (
    <main className="relative flexCenter min-h-screen px-[32px]">
      <Image src={"/corn-field-bg.jpg"} fill sizes="100%" className="object-cover" />

      <div className="z-10 translate-y-[-50px]">
        <h1 className="text-gray-200 text-[100px] font-extrabold">ສະຖິຕິປີ 2014</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {data.map((item, index) => (
            <motion.div key={index} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: index * 0.2 }}>
              <Card className="bg-gray-200" isFooterBlurred shadow="sm">
                <CardBody className="">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-4xl font-bold">{item.value}</p>
                </CardBody>
                <CardFooter className="">
                  <p>{item.desc}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

const data = [
  {
    title: "ສາລີ",
    value: "1,500,000 ໂຕນ",
    desc: "ຜົນຜະລິດ",
  },
  {
    title: "ເຂົ້າ",
    value: "5,000,000+ ໂຕນ",
    desc: "ຜົນຜະລິດ",
  },
  {
    title: "ຄວາຍ ແລະ ງົວ",
    value: "3,000 ໂຕ",
    desc: "ຈຳນວນປະຊາກອນ",
  },
  {
    title: "ໝູ, ແບ້ ແລະ ແກະ",
    value: "3,500 ໂຕ",
    desc: "ຈຳນວນປະຊາກອນ",
  },
];
