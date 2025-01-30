import { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach(key => form.append(key, formData[key as keyof typeof formData]));
    if (resume) {
      form.append('resume', resume);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: form,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="text" name="linkedin" onChange={handleChange} placeholder="LinkedIn" />
      <input type="text" name="visas" onChange={handleChange} placeholder="Visas" />
      <textarea name="openInput" onChange={handleChange} placeholder="Open input"></textarea>
      <input type="file" name="resume" onChange={handleFileChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}
