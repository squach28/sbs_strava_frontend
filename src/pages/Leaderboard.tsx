import LeaderboardList from "../components/LeaderboardList"
import Navbar from "../components/Navbar"

const Leaderboard = () => {
    return (
        <div className="bg-primary-light dark:bg-primary-dark dark:text-text-dark min-h-screen lg:px-24 xl:px-48">
            <Navbar />
            <LeaderboardList />
        </div>
    )
}

export default Leaderboard