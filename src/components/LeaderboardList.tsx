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
        <div className="md:px-[10em] px-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Leaderboard</h1>
                <button className="text-sm bg-blue-400 px-2 py-1 rounded-lg">Past leaderboards</button>
            </div>
            <div className="flex justify-between my-3">
                <button 
                    className={`flex-1 p-2 rounded-l-lg border-gray-50 border ${selectedTime === 'month' ? 'bg-green-500' : 'bg-[#525458]'}`} 
                    onClick={selectMonthLeaderboard}
                    >Month
                </button>
                <button 
                    className={`flex-1 p-2 text-[#F0ECE5] border-gray-50 border ${selectedTime === 'year' ? 'bg-green-500' : 'bg-[#525458]'}`} 
                    onClick={selectYearLeaderboard}
                    >Year
                </button>
                <button 
                    className={`flex-1 p-2 rounded-r-lg border-gray-50 border ${selectedTime === 'all-time' ? 'bg-green-500' : 'bg-[#525458]'}`} 
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