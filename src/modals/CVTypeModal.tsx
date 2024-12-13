import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CVTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVTypes = [
  {
    id: 1,
    title: "Oxford",
    image: "/oxford-cv.svg",
    description: "Corporate and professional design",
  },
  {
    id: 2,
    title: "Creative",
    image: "/creative-cv.svg",
    description: "Creative and modern approach",
  },
  {
    id: 3,
    title: "Modern",
    image: "/modern-cv.svg",
    description: "Clean and elegant look",
  },
  {
    id: 4,
    title: "Chronological",
    image: "/chronological-cv.svg",
    description: "Time-based detailed format",
  },
];

const CVTypeCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  const router = useRouter();

  return (
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
      onClick={() => router.push(`/cv-assistant/${title.toLowerCase()}`)}
    >
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
          <h3 className="text-base font-bold leading-tight">{title}</h3>
          <p className="text-xs opacity-80 leading-tight">{description}</p>
        </div>
      </div>
    </div>
  );
};

export function CVTypeModal({ isOpen, onClose }: CVTypeModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl p-6 w-[650px] max-h-[90vh] overflow-y-auto">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="text-lg font-semibold text-gray-900">
              Choose your CV template
            </div>
            <div className="text-sm text-gray-600">
              Don&apos;t worry, you can change this later
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 place-items-center">
            {CVTypes.map((type) => (
              <CVTypeCard
                key={type.id}
                title={type.title}
                image={type.image}
                description={type.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
