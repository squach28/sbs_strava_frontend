import { Activity } from "../types/Activity"
import { convertToMiles } from "../utils/unitConverter"
import { Link } from "react-router-dom"

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string

}

const ActivityCard = ({ name, discordName, avatarUrl, distance, elapsed_time, sport_type, start_date_local }: ActivityCardProps) => {
    const miles: number = convertToMiles(distance)
    const time = elapsed_time / 60
    const hours = time / 60
    const minutes = time
    const date = new Date(start_date_local)
    return (
        <li className="flex flex-col bg-gray-200 text-black rounded-lg gap-1 p-3 shadow-lg">
            <div className="flex items-center gap-2">
                    <Link to="/"><img className="rounded-full w-10 border-2 border-black" src={avatarUrl} alt={`profile picture of ${discordName}`} /></Link>
                    <Link to="/"><p className="font-bold">{discordName}</p></Link>
            </div>
            <p className="text-lg font-bold">{name} - {sport_type}</p>
            <p>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric'})} - {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'})}</p>
            <div className="flex justify-center items-center">
                <div className="flex flex-col flex-1 justify-center items-center">
                    <p className="font-bold">Distance</p>
                    <p>{miles} {miles > 1 ? 'miles' : 'mile'}</p>
                </div>
                <div className="flex flex-col flex-1 items-center">
                    <p className="font-bold">Time</p>
                    <p>{hours >= 1 ? `${hours}h` : ''} {minutes % 60 !== 0 ? `${minutes}m` : ''}</p>
                </div>
            </div>
        </li>
    )
}

export default ActivityCard