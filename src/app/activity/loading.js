import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flexCenter min-h-[70vh]">
      <CircularProgress color="success" label="ກຳລັງໂຫຼດຂໍ້ມູນ" />
    </div>
  );
}
