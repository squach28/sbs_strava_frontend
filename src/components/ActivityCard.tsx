import { Activity } from "../types/Activity"
import { convertToMiles } from "../utils/unitConverter"

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string

}

const ActivityCard = ({ name, discordName, avatarUrl, distance, elapsed_time }: ActivityCardProps) => {
    const miles: number = convertToMiles(distance)
    const time = elapsed_time / 60
    const hours = time / 60
    const minutes = time
    return (
        <li className="flex flex-col bg-gray-200 text-black rounded-lg gap-1 p-2">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-10" src={avatarUrl} alt={`profile picture of ${discordName}`} />
                <p className="font-bold">{discordName}</p>
            </div>
            <p className="text-lg font-bold">{name}</p>
            <p>Distance: {miles} {miles > 1 ? 'miles' : 'mile'} </p>
            <p>Time: {hours >= 1 ? `${hours}h` : ''} {minutes % 60 !== 0 ? `${minutes}m` : ''}</p>
        </li>
    )
}

export default ActivityCard