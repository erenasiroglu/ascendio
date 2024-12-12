"use client";
import React from "react";
import { RocketIcon, PenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

function DashboardPage() {
  const router = useRouter();

  const DashboardCard = ({
    icon: Icon,
    title,
    onClick,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    onClick: () => void;
  }) => (
    <div
      className="
        group
        bg-white 
        rounded-xl 
        border 
        border-gray-100 
        p-5 
        cursor-pointer 
        transition-all 
        duration-300 
        hover:shadow-md
        hover:border-[#4F46E5]/20
      "
      onClick={onClick}
    >
      <div className="flex w-[182px] h-[120px] justify-between items-center">
        <div className="flex items-center space-x-4">
          <Icon className="w-6 h-6 text-[#4F46E5] group-hover:text-[#4F46E5]/80 transition-colors" />
          <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
            {title}
          </span>
        </div>
        <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-[#4F46E5] transition-colors" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Ascendio CV</h1>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard
              icon={RocketIcon}
              title="CV Assistant"
              onClick={() => router.push("/cv-assistant")}
            />
            <DashboardCard
              icon={PenIcon}
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
    </div>
  );
}

export default DashboardPage;
