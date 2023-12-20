import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Activity } from "../types/Activity"
import ActivityCard from "../components/ActivityCard"

const Home = () => {
    const [activities, setActivities] = useState<Activity[] | null>(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/activities/all`)
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    console.log(activities)
    return (
        <div className="bg-[#31304D] text-[#F0ECE5]">
            <Navbar />
            <h1 className="px-8 text-3xl font-bold">Home</h1>
            {activities ?
                activities.length > 0 ? 
                    <ul className="flex flex-col gap-4 px-8 py-4">
                        {activities.map(activity => <ActivityCard key={activity.id} {...activity} />)}
                    </ul> : 
                    <p className="mx-auto">No activites</p> 
                : 
                <div className="h-screen mx-auto font-bold">Loading...</div>}
        </div>
    )
}

export default Home