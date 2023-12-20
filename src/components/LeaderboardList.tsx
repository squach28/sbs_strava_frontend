import { Leaderboard } from "../types/Leaderboard"
import { useEffect, useState } from "react"
import LeaderboardListItem from "./LeaderboardListItem"
// import data from './data.json'

const LeaderboardList = () => {
    const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null)
    const [selectedTime, setSelectedTime] = useState<string>('month')
    const currentDate = new Date()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/leaderboard`,)
            .then(res => res.json())
            .then(data => setLeaderboard(data))
        // const sampleLeaderboard: Leaderboard = {
        //     month: "12",
        //     year: '2023',
        //     users: data
        // }
        // setLeaderboard(sampleLeaderboard)
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

    const renderLeaderboardTitle = () => {
        switch(selectedTime) {
            case 'month':
                return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric'})
            case 'year':
                return currentDate.toLocaleDateString('en-US', { year: 'numeric'})
            case 'all-time':
                return 'All Time'
            default:
                return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric'})
        }
    }

    return (
        leaderboard ?
        <div className="md:px-[10em] px-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Leaderboard</h1>
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
            <h2 className="text-xl my-3 font-bold">{renderLeaderboardTitle()}</h2>
            <ol className="list-decimal flex flex-col gap-2">
            {leaderboard?.users.map((user, place) => {
                const props = {
                    ...user,
                    place: place + 1
                }
                return (
                    <LeaderboardListItem key={user.discordId} {...props } />
                )
            })}
            </ol>
        </div>
        :
        null
    )
}

export default LeaderboardList