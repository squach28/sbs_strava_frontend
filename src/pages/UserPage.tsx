import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { User } from "../types/User"
import { Activity } from "../types/Activity"
import ActivityCard from "../components/ActivityCard"

const UserPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState<User | null >(null)
    const [recentActivities, setRecentActivities] = useState<Activity[] | null>(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/activities/recent?discordId=${id}`)
            .then(res => res.json())
            .then(data => setRecentActivities(data))
        fetch(`${import.meta.env.VITE_API_URL}/user/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    return (
        user ? 
            <div className="flex flex-col gap-3 p-4 bg-[#31304D] text-[#F0ECE5]">
                <img className="rounded-full object-contain w-36 mx-auto border-4 shadow-md" src={user.avatarUrl} alt="" />
                <h1 className="text-2xl font-bold mx-auto">{user.discordName}</h1>
                <div>
                    <h2 className="text-xl font-bold">Stats</h2>    
                </div> 
                <div>
                    <h2 className="font-bold text-xl">Recent Activities</h2>
                    <ul className="flex flex-col gap-4">
                        {recentActivities ? recentActivities.map(activity => <ActivityCard key={activity.id} {...activity} />) : null}
                    </ul>
                </div>
            </div> 
        
        : <p>Loading...</p>
    )
}

export default UserPage