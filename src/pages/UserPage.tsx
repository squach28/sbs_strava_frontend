import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { User } from "../types/User"
import { Activity } from "../types/Activity"
import ActivityCard from "../components/ActivityCard"
import StatsTable from "../components/StatsTable"
import { Stats } from "../types/Stats"
import Navbar from "../components/Navbar"

const UserPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState<User | null >(null)
    const [recentActivities, setRecentActivities] = useState<Activity[] | null>(null)
    const [stats, setStats] = useState<Stats[] | null>(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/activities/recent?discordId=${id}`)
            .then(res => res.json())
            .then(data => setRecentActivities(data))
        fetch(`${import.meta.env.VITE_API_URL}/user/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
        fetch(`${import.meta.env.VITE_API_URL}/stats?discordId=${id}`)
            .then(res => res.json())
            .then(data => setStats(data))
    }, [id])
    return (
        <div>
            <Navbar />
            {        user ?
                <div className="flex flex-col gap-3 p-4 dark:bg-[#31304D] dark:text-[#F0ECE5]">
                    <img className="rounded-full object-contain w-36 mx-auto border-4 shadow-md" src={user.avatarUrl} alt="" />
                    <h1 className="text-2xl font-bold mx-auto">{user.discordName}</h1>
                    <div>
                        <h2 className="text-xl font-bold">Stats</h2>
                        {stats ? <StatsTable stats={stats} /> : <p>Loading stats...</p>}
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 items-center">
                        <h2 className="font-bold text-xl">Recent Activities</h2>
                            {recentActivities ? recentActivities.map(activity => <ActivityCard key={activity.id} {...activity} />) : null}
                        </ul>
                    </div>
                </div>
            
            : <p>Loading...</p>}
        </div>
    )
}

export default UserPage