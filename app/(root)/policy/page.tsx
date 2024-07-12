import { Button } from "@/components/ui/button";
import { policy } from "@/lib/constants";
import Link from "next/link";

const Policy = () => {
  return (
    <div className="p-4 md:p-20">
      <Link href="/">
        <Button className="bg-gray-100 text-black rounded-l-full rounded-r-xl hover:bg-gray-200">
          Back Home
        </Button>
      </Link>
      <p className="my-10 text-2xl font-bold">🚀 Our Policy</p>
      <div className="flex flex-col gap-8">
        {policy.map((section, index) => (
          <div key={index}>
            <p className="text-xl font-semibold ">{section.title}</p>
            <p className="text-sm font-semibold my-2">{section.description}</p>
            {section.nested &&
              section.nested.map((subSection, subIndex) => (
                <div key={subIndex} className="pl-5">
                  <p className="text-md font-semibold">
                    * {subSection.subtitle}
                  </p>
                  <p className="text-xs  font-semibold">
                    {subSection.description}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
