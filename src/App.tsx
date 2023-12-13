import LeaderboardList from "./components/LeaderboardList"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div className="text-xl h-screen font-bold bg-[#31304D] text-[#F0ECE5]">
      <Navbar />
      <LeaderboardList />
    </div>
  )
}

export default App
