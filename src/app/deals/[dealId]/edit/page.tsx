'use client'

import api from "@/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputForm from "@/components/InputForm";
import TextArea from "@/components/TextArea";
import { useAuth } from "@/contexts/auth.context";
import { showError, showSuccess, showWarn } from "@/utils/toastify.emitters";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";

export default function DealsEditPage({ params: { dealId } }: { params: { dealId: string } }) {
    const router = useRouter();
    const { isLoggedIn, isAuthInitialized } = useAuth();
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [fileName, setFileName] = useState("");
    
    const fileInput = useRef<HTMLInputElement>(null);

    const { data, isFetching     } = useQuery({
        queryKey: `${dealId}`,
        queryFn: api.deals.getDealById(dealId)
    })

    useEffect(() => {
        if (!isAuthInitialized || isLoggedIn) {
            return;
        }
        
        router.replace("/");
        showWarn("로그인 후 이용해주세요");
    }, []);

    const handleFileInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const fileName = e.target.value.split("\\").pop() || "";
        
        setFileName(fileName);
    }

    const handleChange: MouseEventHandler<HTMLButtonElement> = async () => { 
        const file = fileInput.current?.files?.[0];

        if (!file) return showWarn("파일을 선택해주세요!");
        else if (price <= 0) return showWarn("1원 이상만 입력 가능합니다.");
        
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title",title);
        formData.append("description",description);
        formData.append("price", price.toString());
        formData.append("location", location);
        
        try {
            await api.deals.createDeal(formData);
            router.push("/");
            showSuccess("판매 작성이 완료되었어요!");
        } catch (e:any) {
            showError(e.message);
        }

    };

    return isLoggedIn && <article className="flex flex-col justify-items-center items-center mx-auto">
        <InputForm>
            <div className="flex justify-between items-center-middle w-full my-5">
                <h2 className="font-bold text-3xl text-center">판매하기</h2>
                <button className="font-normal bg-amber-500 text-gray-50 h-10 px-2 rounded-md"
                    onClick={() => {
                        fileInput.current?.click();
                    }}
                >이미지 추가</button>
            </div>
            {fileName? <p>{fileName}</p>: null}
            <input
                type="file"
                ref={fileInput}
                accept="image/jpeg, image/png"
                onChange={handleFileInput}
                className="hidden"
            />
            <Input
                label="제목"
                type="text"
                name="title"
                placeholder="제목을 입력해주세요."
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                label="가격"
                type="number"
                name="price"
                placeholder="₩ 가격을 입력해주세요."
                onChange={(e) =>
                {
                    setPrice(parseInt(e.target.value));
                }}
            />
            <TextArea
                label="자세한 설명"
                name="content"
                placeholder={`게시글 내용을 작성해주세요. (판매 금지 물풀은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.`}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Input
                label="거래 지역"
                type="text"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="구매자와 만나서 거래하고 싶은 장소를 적어주세요."
            />
            <Button onClick={handleChange}>작성 완료</Button>
        </InputForm>
    </article>;
}