import DashboardContent from "../components/DashboardContent"
import Footer from "../components/Footer"

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardContent />
      <Footer />
    </div>
  )
}

export default Dashboard
