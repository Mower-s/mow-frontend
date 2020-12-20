import DashboardNav from '../components/dashboardNav';
import ResolutionBox from '../components/resolutionBox';
import RecentBox from '../components/recentBox';
function Dashboard() {
    return (
        <div>
            <DashboardNav />
            <h1 className="dashboard-title">CREATE AND COLLABORATE</h1>
            <ResolutionBox />
            <RecentBox/>
        </div>
    );
  }

  export default Dashboard;