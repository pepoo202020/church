import { FlipWords } from "@/components/ui/flip-words";
import "./HeroSection.css";
export const HeroSection = () => {
  const words = ["الرسمي", "الوحيد"];
  return (
    <div className="hero w-screen max-w-screen  bg-[#053762]">
      <div className="relative flex w-full gap-10 py-10 h-full items-center justify-center  bg-[#05376297] text-white">
        <h1 className="text-[25px] w-1/2">
          الموقع{" "}
          <span>
            {" "}
            <FlipWords words={words} className="text-right" />{" "}
          </span>{" "}
          لكنيسة الشهيد ابادير واخته الشهيدة ايريني باسيوط
        </h1>
      </div>
    </div>
  );
};
