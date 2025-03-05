"use client";
import { useState } from "react";
import "./uploadShareData.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file to upload");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("File uploaded successfully");
      router.push("/chennai-super-kings-csk-unlisted-shares");
    } else {
      alert("Failed to upload file");
    }
  };

  return (
    <div className="upload-form">
      <h1>Upload Data File (XLSX)</h1>
      <form onSubmit={handleUpload}>
        <input
          className="file-input"
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
        />
        <button className="upload-btn" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
