"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer"
    >
      <ArrowLeft size={20} className="text-gray-700" />
      <span className="font-medium text-gray-700">Voltar</span>
    </button>
  );
}
