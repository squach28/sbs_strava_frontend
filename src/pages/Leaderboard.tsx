import LeaderboardList from "../components/LeaderboardList"
import Navbar from "../components/Navbar"

const Leaderboard = () => {
    return (
        <div className="bg-primary-light dark:bg-primary-dark dark:text-text-dark h-screen">
            <Navbar />
            <LeaderboardList />
        </div>
    )
}

export default Leaderboard