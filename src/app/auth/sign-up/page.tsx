"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import InputForm from "@/components/InputForm";
import useMutationSignUp from "@/react-query/auth/useMutationSignUp";
import { showError } from "@/utils/toastify.emitters";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function SignUpPage() {
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useMutationSignUp();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const { email, password, passwordConfirm, nickname, location } = formData;
    const validationRules = [
      { isValid: email.trim(), message: "이메일을 입력해 주세요" },
      { isValid: password.trim(), message: "패스워드를 입력해 주세요" },
      { isValid: passwordConfirm.trim(), message: "패스워드 확인을 입력해 주세요" },
      { isValid: password === passwordConfirm, message: "패스워드가 일치하지 않습니다" },
      { isValid: nickname.trim(), message: "닉네임을 입력해 주세요" },
      { isValid: location.trim(), message: "위치를 입력해 주세요" },
    ];

    for (const { isValid, message } of validationRules) {
      if (!isValid) {
        showError(message);
        return false;
      }
    }

    return true;
  };

  const handleClickSignUp = async () => {
    if (!validateInputs()) return;
    
    await signUp(formData)
      .then(() => {
        toast.success("회원가입에 성공했습니다.");
        router.replace("/");
      })
      .catch((e) => showError(e.message));
  };

  return (
    <>
      <Heading>회원가입</Heading>

      <InputForm>
        <Input
          label="이메일"
          autoFocus
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={isPending}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          disabled={isPending}
        />
        <Input
          label="닉네임"
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          disabled={isPending}
        />
        <Input
          label="위치"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          disabled={isPending}
        />

        <div className="mt-2" />

        <Button color="black" onClick={handleClickSignUp} disabled={isPending}>
          회원가입하기
        </Button>
      </InputForm>
    </>
  );
}

export default SignUpPage;
