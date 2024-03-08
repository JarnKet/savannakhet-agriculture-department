import Image from "next/image";

export default function Logo({ width = 50, height = 50 }) {
  return (
    <div>
      <Image src="/logo.png" alt="logo" sizes="100%" width={width} height={height} />
    </div>
  );
}
