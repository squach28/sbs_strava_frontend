import { UserStats } from "../types/UserStats"
import { Link } from "react-router-dom"

type LeaderboardListItemProps = UserStats & {
    place: number
}

const LeaderboardListItem = ({ discordId, discordName, numOfActivities, distance, avatarUrl, place }: LeaderboardListItemProps) => {
    const listBackgroundColor = () => {
        switch(place) {
            case 1:
                return 'bg-[#FFD700] text-black'
            case 2:
                return 'bg-[#C0C0C0] text-black'
            case 3:
                return 'bg-[#CD7F32] text-black'
            default:
                return 'bg-gray-500'

        }
    }

    return (
        <li className={`flex gap-3 ${listBackgroundColor()} px-4 py-3 rounded-md items-center`}>
            <p className="font-bold text-2xl">{place}</p>
            <Link to={`/user/${discordId}`}><img width={50} className="bg-white rounded-full" src={avatarUrl} alt="person" /></Link>
            <div className="flex flex-col">
                <Link to={`/user/${discordId}`}>
                    <p className="font-bold">{discordName}</p>
                </Link>
                <div className="flex flex-col text-sm">
                    <p>{numOfActivities} activities</p>
                    <p>{distance} mi</p>
                </div>
            </div>
        </li>
    )
    }

export default LeaderboardListItem