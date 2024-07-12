import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const HomeScroll = () => {
  return (
    <ContainerScroll>
      <Image
        src={`/img.png`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top "
        draggable={false}
      />
    </ContainerScroll>
  );
};

export default HomeScroll;
