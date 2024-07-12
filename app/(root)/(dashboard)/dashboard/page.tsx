import DashboardProjectSection from "@/components/shared/DashboardProjectSection";
import DashboardStatsSections from "@/components/shared/DashboardStatsSections";
const Dashboard = () => {
  return (
    <div className="p-4">
      <DashboardStatsSections />
      <DashboardProjectSection />
    </div>
  );
};

export default Dashboard;
