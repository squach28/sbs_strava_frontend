import LeaderboardList from "../components/LeaderboardList"
import Navbar from "../components/Navbar"

const Leaderboard = () => {
    return (
        <div className="bg-[#31304D] text-[#F0ECE5] h-screen">
            <Navbar />
            <LeaderboardList />
        </div>
    )
}

export default Leaderboard