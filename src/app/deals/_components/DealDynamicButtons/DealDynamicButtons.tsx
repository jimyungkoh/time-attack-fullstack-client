"use client"

import api from "@/api";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import { showError, showSuccess, showWarn } from "@/utils/toastify.emitters";
import { useRouter } from "next/navigation";
import { useState } from "react";




export default function DealDynamicButtons({ sellerId, id }: { sellerId: string; id: string }) {
    const { userId, isAuthInitialized } = useAuth();
    const  [liked, setLiked ] = useState(false);
        
    const router = useRouter();
    
    const handleClickEdit = () => {
        router.push(`/deals/${id}/edit`);
    }

    const handleClickDelete = async () => {
        await api.deals.deleteDealById(id).
            then(() => showSuccess("판매글 삭제가 완료되었습니다."))
            .catch((e) =>
            showError(e.message)
        );
        router.push("/");
    }

    const handleClickLike = async () => {
        await api.deals.toggleDealLike(id)
            .then((result) => setLiked(result)
            ).catch((e) => showWarn(e.message));
    }

    return  isAuthInitialized && (
        userId === sellerId ?
            <div>
                <Button onClick={() => handleClickEdit()}>수정하기</Button>
                <Button onClick={()=>handleClickDelete()}>삭제하기</Button>
            </div> :
            <Button onClick={() => handleClickLike()}>
                {!liked || !userId ? "찜하기" : "찜 취소하기"}
            </Button>
    );
}
