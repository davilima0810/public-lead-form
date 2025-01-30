/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import * as S from "./styles";
import { useRouter } from 'next/navigation';

export default function SuccessFormTemplate() {
  const router = useRouter();

  return (
    <S.Container>
      <S.ContainerForm>
        <S.TitleText>
          Thank You
        </S.TitleText>
        <S.TitleSubText>
          Your information was submitted to our team of immigration attorneys. Expected a email from hello@tryalma.ai.
        </S.TitleSubText>
        <S.ButtonSubmit onClick={()=> {
          router.push('form')
        }}> Go Back to HomePage </S.ButtonSubmit>
      </S.ContainerForm>
    </S.Container>
  );
}
