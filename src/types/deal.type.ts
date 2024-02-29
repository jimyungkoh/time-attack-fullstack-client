export type TCreateDeal = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  favoriteCnt: number;
  viewCnt: number;
  seller: Seller;
};

type Seller = { id: string };

export type TDeal = TCreateDeal & { imgUrl: string; createdAt: number };

export type TDealSort = "date" | "likes" | "views";
