import api from "@/api";
import DealDetailsPage from "../_components/DealDetailsPage";

export default async function DealPage({ params: { dealId } }: { params: { dealId: string } }) {
    const deal = await api.deals.getDealById(dealId)
        .catch((e) => {
        
        });

    return deal ? (
        <DealDetailsPage deal={deal}/>
    ) : <div className="flex justify-center items-center">
            <h1 className="font h-fit w-fit">존재하지 않는 판매글입니다.</h1>
    </div>;
};