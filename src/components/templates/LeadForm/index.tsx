/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';
import * as S from "./styles";
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    linkedin: '',
    visas: '',
    openInput: '',
  });
  const [resume, setResume] = useState<File | null>(null);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleVisaChange = (e : any) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      visas: value, 
    });
  };

  const visaOptions = [
    { value: 'O-1', label: 'O-1' },
    { value: 'EB-1A', label: 'EB-1A' },
    { value: 'EB-1 NIW', label: 'EB-1 NIW' },
    { value: 'I dont know', label: 'I dont know' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach(key => form.append(key, formData[key as keyof typeof formData]));
    if (resume) {
      form.append('resume', resume);
    }

    await fetch('/api/upload', {
      method: 'POST',
      body: form,
    }).then(()=> {
      router.push('/success-form')
    }).catch(err=>{
      console.log(err)
    });

  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Logo src='./assets/img/alma-logo.png' />
        <S.Title>
          Get An Assessment <br />
          Of Your Immigration Case
        </S.Title>
      </S.ContainerHeader>
      <S.ContainerForm onSubmit={handleSubmit}>
        <S.TitleText>
          Want to understand yout visa options?
        </S.TitleText>

        <S.TitleSubText>
          submit the form below and our team of experienced attorneys will reviwe your information and send a preliminary assessment of your case based on your goals.
        </S.TitleSubText>
        <S.InputComponent
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First Name"
        />
        <S.InputComponent
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
        />
        <S.InputComponent
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <S.InputComponent
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn / Personal Website URL"
        />
        <S.TitleText>
          Visa categories of interest?
        </S.TitleText>
        <S.CheckboxContainer>
          {visaOptions.map((option) => (
            <div key={option.value}>
              <S.CheckboxComponent
                  key={option.value}
                  name="visas"
                  value={option.value}
                  checked={formData.visas === option.value}
                  onChange={handleVisaChange}
                  type="checkbox"
                />
              <S.CheckboxLabel>{option.label}</S.CheckboxLabel>
            </div> 
          ))}
        </S.CheckboxContainer>
        <S.TitleText>
          How can we help you?
        </S.TitleText>
        <S.TextareaComponent
          name="openInput"
          value={formData.openInput}
          onChange={handleChange}
          placeholder=""
        />
        <S.TitleText>
          Send your CV.
        </S.TitleText>
        <S.FileInputContainer>
          <S.FileInputLabel>Upload your resume (PDF, DOC, DOCX)</S.FileInputLabel>
          <label>
            <S.FileInputField
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
            <S.FileInputCustom>
              {resume ? resume.name : 'Choose File'}
            </S.FileInputCustom>
          </label>
        </S.FileInputContainer>
        <S.ButtonSubmit type='submit'>Submit</S.ButtonSubmit>
      </S.ContainerForm>
    </S.Container>
  );
}
