"use client"

import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLeaf } from "react-icons/fa";
import { Authenticated } from "./components/Authenticated";
import LogInModal from "./components/LogInModal";

export default function Header() {
    const auth = useAuth();
    const modal = useModal();
    const router = useRouter();

    const handleClickLogIn = () => modal.open(<LogInModal />);

    const handleClickLogOut = async () => {
        await api.auth.logOut();
        auth.setIsLoggedIn(false);

        router.push("/");
    };

    return (
        <header className="bg-white sticky top-0 h-16 border-b flex items-center py-5 lg:py-10  px-5 lg:px-9 z-10 shrink-0">
            <Link href="/" className="font-bold text-2xl flex gap-x-2">
                <FaLeaf className="text-amber-500 py-  1 text-3xl" />
                중고마켓
            </Link>
            <nav className="ml-20">
                <ul className="flex gap-x-4 list-none">
                    <li><Link href="/">구입하기</Link></li>
                    <li><Link href="/deals/create">판매하기</Link></li>
                    <li><Link href="/my/deals">내 판매글</Link></li>
                </ul>
            </nav>
            <div className="ml-auto flex items-center gap-x-4">
                <Authenticated>
                    {auth.isLoggedIn ?
                        <button className="nav-link" onClick={handleClickLogOut}>로그아웃</button>
                        :
                        <>
                            <button className="nav-link" onClick={handleClickLogIn}>로그인</button>
                            <Link className="nav-link" href={"/auth/sign-up"}>회원가입</Link>
                        </>
                    }
                </Authenticated>
            </div>
        </header>
    );
}
