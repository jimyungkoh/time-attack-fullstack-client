"use client"

import { useAuth } from "@/contexts/auth.context";
import { showWarn } from "@/utils/toastify.emitters";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyDealsPage() {
   const { isLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.replace("/");
            showWarn("로그인 후 이용해주세요");
        }
        return;
    }, []);

    return (
        <div>MyDealsPage</div>
    );
}
