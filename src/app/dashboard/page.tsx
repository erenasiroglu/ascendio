"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import { CVTypeModal } from "@/modals/CVTypeModal";

function DashboardPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DashboardCard = ({
    image,
    title,
    onClick,
  }: {
    image?: string;
    title: string;
    onClick: () => void;
  }) => (
    <div
      className="
        group
        relative
        rounded-xl
        border
        border-gray-100
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-md
        hover:border-[#4F46E5]/20
        w-[282px]
        h-[160px]
        overflow-hidden
      "
      onClick={onClick}
    >
      {image ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300"
            sizes="282px"
          />
          <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 group-hover:bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white transform transition-transform duration-300 group-hover:translate-y-[-2px]">
            <h3 className="text-base font-bold leading-tight">
              {title === "CV Assistant" ? "Create CV" : "Create Letter"}
            </h3>
            <p className="text-xs opacity-80 leading-tight">
              with AI Assistant
            </p>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <PenIcon className="w-6 h-6 text-[#4F46E5] group-hover:text-[#4F46E5]/80 transition-colors" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
              {title}
            </span>
          </div>
          <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-[#4F46E5] transition-colors" />
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Ascendio CV</h1>
        </div>

        <div className="space-y-4">
          <div className="flex flex-row gap-8">
            <DashboardCard
              image="/ascendio-dashboard.svg"
              title="CV Assistant"
              onClick={() => setIsModalOpen(true)}
            />
            <DashboardCard
              image="/ascendio-letter.svg"
              title="Motivation Letter"
              onClick={() => router.push("/motivation-letter")}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-800">
              Recent Files
            </h2>
          </div>
          <div className="text-sm text-gray-500 opacity-70">
            No recent files
          </div>
        </div>
      </div>
      <CVTypeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default DashboardPage;
