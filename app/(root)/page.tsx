"use client";
import HomeHeader from "@/components/shared/HomeComponents/HomeHeader";
import HomeHero from "@/components/shared/HomeComponents/HomeHero";
import HomeScroll from "@/components/shared/HomeComponents/HomeScroll";
import HomeBenifits from "@/components/shared/HomeComponents/HomeBenifits";
import HomeFooter from "@/components/shared/HomeComponents/HomeFooter";
import HomeGradient from "@/components/shared/HomeComponents/HomeGradient";

export default function Home() {
  return (
    <div className=" min-h-screen w-full overflow-hidden bg-transperant text-black">
      <HomeGradient />
      <HomeHeader />
      <HomeHero />
      <HomeScroll />
      <HomeBenifits />
      <HomeFooter />
    </div>
  );
}
