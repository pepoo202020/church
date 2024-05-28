import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Images/logo.png"
        alt="Church Logo"
        className="header_logo"
        width={60}
        height={60}
      />

      <div
        className="flex flex-col items-start justify-start gap-1 text-[12px] text-yellow-400"
        style={{ fontFamily: "Lemonada" }}
      >
        <span>كنيسة الشهيد ابادير واخته</span>
        <span>الشهيده ايريني بأسيوط</span>
      </div>
    </div>
  );
};
