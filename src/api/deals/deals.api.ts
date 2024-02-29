import { TData } from "@/types/data.type";
import { AxiosError } from "axios";
import { client } from "..";

export const createDeal = async (formData: FormData) => {
  return await client
    .post<TData>("/deals", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
};

export const findDeals = async () => {
  return await client
    .get("/deals")
    .then((res) => res.data.result)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
};

export async function getDealById(dealId: string) {
  return await client
    .get(`/deals/${dealId}`)
    .then((res) => res.data.result)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
}

export async function deleteDealById(dealId: string) {
  return await client
    .delete(`/deals/${dealId}`)
    .then((res) => res.data.result)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
}
export async function toggleDealLike(id: string) {
  return await client
    .put(`/deals/${id}/like`)
    .then((res) => res.data.result)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
}
