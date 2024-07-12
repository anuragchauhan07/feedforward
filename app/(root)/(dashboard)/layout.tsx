import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex ">
      <div className="hidden sm:block">

      <SideBar />
      </div>
      <div  className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
