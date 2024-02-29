import { TDeal, TDealSort } from "@/types/deal.type";
import ResponsiveGridCardsViewItem from "./ResponsiveGridCardsViewItem";

const sortOptions = {
    date: (a:TDeal, b:TDeal) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    likes: (a:TDeal, b:TDeal) => b.favoriteCnt - a.favoriteCnt,
    views: (a:TDeal, b:TDeal) => b.viewCnt - a.viewCnt, 
}
export default function ResponsiveGridCardsView({deals, sort}:{deals:TDeal[], sort?: TDealSort}) {
    const sortedDeals = [...deals].sort(sortOptions[sort || "views"]);
    
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {sortedDeals.map(deal => (
                <ResponsiveGridCardsViewItem key={deal.id} deal={deal} />
            ))}
        </ul>
    );
}
