import { TDeal } from "@/types/deal.type";
import convertToKRW from "@/utils/money-formatter";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSearch } from "react-icons/fa";

export default function ResponsiveGridCardsViewItem({ deal }: { deal: TDeal }) {
  const baseImgUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL || "";
  const imgUrl = `${baseImgUrl}/${deal.imgUrl}`;

  return (
    <Link href={`/deals/${deal.id}`} className="relative flex flex-col group">
      <section className="relative mb-4 aspect-square">
        <Image
          src={imgUrl}
          alt={deal.id}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
          className="object-cover hover:scale-[1.07] duration-500"
        />
      </section>
      <section className="grid gap-y-1">
        <div className="text-base font-bold">{deal.title}</div>
        <div className="text-base font-bold">{convertToKRW(deal.price)}</div>
        <div className="text-sm font-bold">{deal.location}</div>
        <div className="flex justify-end text-sm font-normal text-gray-600 gap-x-3">
          <FaHeart className="my-1" /> {deal.favoriteCnt}
          <FaSearch className="my-1" />
          {deal.viewCnt}
        </div>
      </section>
    </Link>
  );
}
