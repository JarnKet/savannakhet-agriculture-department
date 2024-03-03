import Image from "next/image";
import Link from "next/link";

// Components UI
import { Card, CardHeader, CardFooter, Image as ImageNextUI, Button } from "@nextui-org/react";

// Services
import { getNews } from "@/services";

export default async function Activity() {
  const news = await getNews();

  // console.log(news);

  return (
    <section>
      <div className="min-h-[70vh] w-full relative">
        <Image src={"/rice-field.jpg"} alt="activity hero" fill sizes={100} className="object-cover" />
        <div className="absolute w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-4xl font-bold lg:text-8xl">ວຽກງານການເຄື່ອນໄຫວ</h1>
          <p className="text-xl lg:text-2xl">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 max-w-[80rem] gap-10 p-10 mx-auto text-xl">
        {news?.map((item) => (
          <Link key={item.id} href={`/activity/${item.slug}`}>
            <Card isFooterBlurred className="w-full h-[300px]  cursor-pointer ">
              <CardHeader className="absolute z-10 flex-col items-start top-1">
                <p className="font-bold uppercase text-tiny text-white/60">ວຽກງານການເຄື່ອນໄຫວ</p>
                <h4 className="text-xl font-medium text-white/90">{item?.title}</h4>
              </CardHeader>
              <ImageNextUI removeWrapper alt="Relaxing app background" className="z-0 object-cover w-full h-full " src={item?.featuredImage?.url} />
              <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex items-center flex-grow gap-2">
                  <ImageNextUI alt="Breathing app icon" className="w-10 bg-black rounded-full h-11" src={item?.officer?.profileImage?.url} />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{item?.officer?.fullName}</p>
                    <p className="text-tiny text-white/60">{item?.officer?.bio}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  ອ່ານ
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export const revalidate = 3600; // revalidate at most every hour
