import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { UserActivities } from "../types/UserActivities"
import ActivityCard from "../components/ActivityCard"

const Home = () => {
    const [allActivities, setAllActivities] = useState<UserActivities[] | null>(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/activities/all`)
            .then(res => res.json())
            .then(data => setAllActivities(data))
    }, [])
    console.log(allActivities)
    return (
        <div className="bg-[#31304D] text-[#F0ECE5] h-screen">
            <Navbar />
            <h1 className="px-8 text-3xl font-bold">Home</h1>
            {allActivities ? 
                <ul className="flex flex-col gap-4 px-8 py-4">
                    {allActivities.map(userActivities => {
                        return userActivities.activities.map(activity => { 
                            const activityCardProps = {
                                ...activity,
                                discordName: userActivities.discordName,
                                avatarUrl: userActivities.avatarUrl
                            }
                            return <ActivityCard key={activity.id} {...activityCardProps} />
                    })
                    }
                    )}
                </ul> : 
                <div>sad face</div>}
        </div>
    )
}

export default Home