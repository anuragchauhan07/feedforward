import Link from "next/link";
import { Button } from "../ui/button";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useGetUser } from "@/lib/hooks/useUser";
import { projectsConst } from "@/lib/constants";
const SideBarSubscriptionSection = ({ userId }: { userId: string }) => {
  const { data: userData } = useGetUser(userId);

  return (
    <div>
      {userData?.isPro ? (
        <div className="rounded-sm bg-animated text-white w-full flex items-center px-4 md:px-10 py-4 text-center justify-center">
          <p>You are a pro subscriber! 🚀</p>
        </div>
      ) : (
        <div className="bg-gray-200 p-4 rounded-sm ">
          <p className="font-bold uppercase">Upgrade to pro</p>
          <p className="text-xs font-semibold text-gray-700 w-full">
            Enjoy unlimited projects creation and enhanced customer experience
          </p>
          <p className="text-sm font-semibold mt-2">
            {projectsConst.freeProjects - userData?.totalProjects} free project
            left
          </p>
          <p className="text-sm font-semibold">∞ free feedbacks left</p>
          <Link href="/pricing" className="w-full">
            <Button className="w-full  bg-white mt-2 py-1 text-black hover:bg-gray-100">
              See Pricing
              <IoArrowRedoSharp className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBarSubscriptionSection;
