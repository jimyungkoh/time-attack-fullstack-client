import { TDeal } from "@/types/deal.type";
import convertToKRW from "@/utils/money-formatter";
import Image from "next/image";
import DealDynamicButtons from "../DealDynamicButtons";

export default function DealDetailsPage({ deal }: { deal: TDeal }) {
    const baseImgUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL || "";

  return (
 <article className="px-5 lg:px-8 py-6 lg:py-20 mx-auto max-w-screen-lg flex flex-col grow w-full items-stretch">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
        <div className="relative aspect-[1/1]">
          <Image
            src={`${baseImgUrl}/${deal.imgUrl}`}
            alt={`${deal.id}`}
            priority
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 20vw"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="pb-8 flex flex-col justify-between">
          <div>
            <h1 className="text-lg">{deal.title}</h1>
            <div className="grid grid-cols-5 my-5 gap-y-5 text-[15px]">
              <div className="text-slate-900 font-bold">판매가</div>
              <div className="col-span-4 font-semibold">
                {convertToKRW(deal.price)}
              </div>
              <div className="text-slate-900 font-bold">설명</div>
              <div className="col-span-4">{deal.description}</div>
            </div>
          </div>
          <DealDynamicButtons sellerId={deal.seller.id} id={deal.id} />
        </div>
      </section>
      </article>
  )
}