import { Leaderboard } from "../types/Leaderboard"
import { useEffect, useState } from "react"

const LeaderboardList = () => {
    const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)
    const [selectedTime, setSelectedTime] = useState<string>('month')
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/leaderboard`,)
            .then(res => res.json())
            .then(data => setLeaderboard(data))
    }, [selectedTime])

    const selectMonthLeaderboard = () => {
        setSelectedTime('month')
    }

    const selectYearLeaderboard = () => {
        setSelectedTime('year')
    }

    const selectAllTimeLeaderboard = () => {
        setSelectedTime('all-time')
    }

    return (
        leaderboard ?
        <div className="px-8">
            <div className="flex items-center justify-between">
                <h1 className="text-xl">Leaderboard</h1>
                <p className="text-sm">View old leaderboards</p>
            </div>
            <div className="flex justify-between">
                <button 
                    className={`flex-1 ${selectedTime === 'month' ? 'bg-green-500' : 'bg-white'}`} 
                    onClick={selectMonthLeaderboard}
                    >Month
                </button>
                <button 
                    className={`flex-1 ${selectedTime === 'year' ? 'bg-green-500' : 'bg-white'}`} 
                    onClick={selectYearLeaderboard}
                    >Year
                </button>
                <button 
                    className={`flex-1 ${selectedTime === 'all-time' ? 'bg-green-500' : 'bg-white'}`} 
                    onClick={selectAllTimeLeaderboard}
                    >All Time
                </button>
            </div>
            <ol className="list-decimal">
            {leaderboard?.users.map(user => {
                return(
                <li key={user.discordId} className="bg-[#B6BBC4] my-3">
                    <div className="flex gap-3">
                        <p>{user.discordId}</p>
                        <p>{user.numOfActivities}</p>
                        <p>{user.distance}</p>
                    </div>
                </li>)
            })}
            </ol>
        </div>
        :
        null
    )
}

export default LeaderboardList