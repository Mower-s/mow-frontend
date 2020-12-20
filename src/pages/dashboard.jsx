import DashboardNav from '../components/dashboard/dashboardNav';
import ResolutionBox from '../components/dashboard/resolutionBox';
import RecentBox from '../components/dashboard/recentBox';
import '../styles/dashboard.css';
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