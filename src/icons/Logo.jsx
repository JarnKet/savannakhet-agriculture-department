import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/logo.png" alt="logo" sizes="100%" width={50} height={50} />
    </div>
  );
}
